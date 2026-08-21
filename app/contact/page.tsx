import type { Metadata } from "next"
import ContactForm from "./ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jerry Lee Melton. Send a message directly from the site.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return <ContactForm />
}
