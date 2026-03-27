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
  loading: () => <div style={{ height: "400px", background: "#1a1a2e" }} />,
})

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const isDisabled = !name || !email || !message

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
            >
              Send Message
            </button>
          </AnimDiv>
        </div>
      </div>
    </AnimPage>
  )
}
