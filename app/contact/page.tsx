"use client"
import Image from "next/image"
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

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const isDisabled = !name || !email || !message

  async function handleSubmit() {
    setStatus("sending")

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

    try {
    } catch (err) {
      console.error(err)
      setStatus("error")
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

        <div className="contact-form-container">
          <AnimDiv className="contact-form-input-container">
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </AnimDiv>
          <AnimDiv className="contact-form-textarea-container">
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
              disabled={isDisabled}
              onClick={handleSubmit}
            >
              {status === "sending" ? "Sending" : "Send Message"}
            </button>
          </AnimDiv>
        </div>
      </div>
    </AnimPage>
  )
}
