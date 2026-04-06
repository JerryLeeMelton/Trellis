"use client"
import { useState } from "react"
import dynamic from "next/dynamic"
import {
  AnimDiv,
  AnimPage,
} from "@/components/animationComponents/AnimatedComponents"

const PortlandMap = dynamic(() => import("../../components/PortlandMap"), {
  ssr: false,
  loading: () => <div style={{ height: "250px", background: "#1d222a" }} />,
})

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  const isDisabled = !name || !email || !message

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setStatus("invalidemail")
      return
    }
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus("sent")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  function statusMessage(status: string) {
    switch (status) {
      case "sent":
        return "Message sent! I'll get back to you as soon as I can!"
      case "invalidemail":
        return "Please enter a valid email address."
      case "error":
        return "Something went wrong. Please try again."
      default:
        return ""
    }
  }

  return (
    <AnimPage className="main-content-container">
      <div className="contact-section-container">
        <AnimDiv>
          <h1>Contact</h1>
        </AnimDiv>
        <AnimDiv className="contact-map-wrapper">
          <PortlandMap />
        </AnimDiv>

        <form className="contact-form-container" onSubmit={handleSubmit}>
          <AnimDiv className="contact-form-input-container">
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </AnimDiv>
          <AnimDiv className="contact-form-textarea-container">
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              placeholder="Your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </AnimDiv>
          <AnimDiv className="contact-form-submit-button-container">
            <button
              className="contact-form-submit-button"
              type="submit"
              disabled={isDisabled || status === "sending"}
            >
              {status === "sending" ? "Sending" : "Send Message"}
            </button>
            <div
              role="alert"
              aria-live="polite"
              className="contact-form-message"
            >
              {statusMessage(status)}
            </div>
          </AnimDiv>
        </form>
      </div>
    </AnimPage>
  )
}
