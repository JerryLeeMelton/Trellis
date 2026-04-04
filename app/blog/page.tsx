import type { Metadata } from "next"

export const metadata: Metadata = {
  robots: { index: false },
}

export default function Blog() {
  return (
    <section className="main-content-container">
      <h1>Blog</h1>
      <div className="blog-content-container">
        <p>
          This page is currently under construction. Check back soon for
          updates!
        </p>
      </div>
    </section>
  )
}
