import Image from "next/image"

export default function Contact() {
  return (
    <section className="main-content-container">
      <div className="contact-section-container">
        <h1>Contact</h1>
        <div>
          <div>
            <input type="text" id="name" placeholder="Name" />
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div>
            <textarea id="message" placeholder="Your message here..." />
          </div>
        </div>
      </div>
    </section>
  )
}
