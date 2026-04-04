import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiter for contact page: 5 requests per 15 minutes per IP
const rateLimitDuration = 15 * 60 * 1000
const maxRequests = 5
const ipTimestamps = new Map<string, number[]>()

// Set to true to bypass rate limiting in development
const disableRateLimit = process.env.NODE_ENV === "development"

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowStart = now - rateLimitDuration
  const timestamps = (ipTimestamps.get(ip) ?? []).filter((t) => t > windowStart)
  if (timestamps.length >= maxRequests) return true
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

  const { name, email, message } = await request.json()

  // Basic validation — should have been caught by the frontend already
  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 },
    )
  }

  try {
    await resend.emails.send({
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
