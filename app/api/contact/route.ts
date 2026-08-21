import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

// Rate limiter for contact page: 5 requests per 15 minutes per IP
const rateLimitDuration = 15 * 60 * 1000
const maxRequests = 5
const ipTimestamps = new Map<string, number[]>()

// Field length caps — the form has no limits of its own, and this endpoint is
// public, so reject oversized payloads before they reach the mail provider.
const maxNameLength = 100
const maxEmailLength = 254
const maxMessageLength = 5000

// Set to true to bypass rate limiting in development
const disableRateLimit = process.env.NODE_ENV === "development"

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowStart = now - rateLimitDuration

  // Drop IPs whose entries have all aged out, otherwise the map grows
  // without bound for the lifetime of the server process.
  for (const [key, times] of ipTimestamps) {
    if (times.every((t) => t <= windowStart)) ipTimestamps.delete(key)
  }

  const timestamps = (ipTimestamps.get(ip) ?? []).filter((t) => t > windowStart)
  if (timestamps.length >= maxRequests) {
    ipTimestamps.set(ip, timestamps)
    return true
  }
  ipTimestamps.set(ip, [...timestamps, now])
  return false
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"

  if (!disableRateLimit && isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>

  // Basic validation — should have been caught by the frontend already
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 })
  }

  if (
    name.length > maxNameLength ||
    email.length > maxEmailLength ||
    message.length > maxMessageLength
  ) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 },
    )
  }

  // Constructed per request: the Resend constructor throws when the key is
  // missing, and at module scope that crashes `next build` on any machine
  // without RESEND_API_KEY in the environment.
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact email")
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }

  try {
    await new Resend(apiKey).emails.send({
      from: "onboarding@resend.dev",
      to: "jerryleemelton@gmail.com",
      replyTo: email,
      subject: `jerryleemelton.com Message from ${name}`,
      text: `From: ${name} \nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
