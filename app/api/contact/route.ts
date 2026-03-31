import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  // Basic validaiton
  // This should have been caught by the frontend already
  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 })
  }

  try {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "jerryleemelton@gmail.com",
      replyTo: email,
      subject: `jerryleemelton.com Message from ${name}`,
      html: `From: ${name} (${email})\n\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
