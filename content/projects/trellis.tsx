import SVGIcon from "@/components/svg/SVGIcon"
import TagElement from "@/components/cards/TagElement"
import type { ProjectContentProps } from "@/content/projects"

export default function TrellisContent({ tags }: ProjectContentProps) {
  return (
    <div className="project-page-content">
      <div className="project-card-tags-container">
        <SVGIcon name="tag" size={22} />
        {tags.map((tag) => (
          <TagElement key={tag} tagName={tag} />
        ))}
      </div>

      <p>
        <span className="project-page-label">Challenge:</span>
        Building a personal portfolio is one of those projects that somehow
        always ends up more ambitious than you planned. The goal wasn&apos;t
        just to make something that listed my work — I wanted a site that felt
        polished and modern, with real personality. Something I&apos;d actually
        be proud to send to people.
      </p>
      <p className="project-page-intro-end">
        <span className="project-page-label">Solution:</span>
        Trellis is the site you&apos;re looking at right now. It&apos;s built on
        Next.js with React and TypeScript, styled entirely with CSS (no
        component library shortcuts), and brought to life with fluid UI
        animations from Motion. Contact form handling is done through Resend.
      </p>

      <h4>Why Build It from Scratch?</h4>
      <p>
        There are plenty of portfolio templates out there, and I&apos;ve seen my
        share of them. Most look fine, but they all end up looking like each
        other. I wanted something that felt custom — and honestly, the process
        of designing and building it from the ground up is itself a better
        demonstration of my abilities than any template ever could be.
      </p>
      <p className="project-page-intro-end">
        Starting from a blank canvas also meant I got to make every decision
        deliberately: the layout, the color system, the typography, the
        interactions. Nothing is there by accident.
      </p>

      <h4>Tech Stack</h4>
      <p>
        The stack for Trellis was chosen to keep things modern without
        overengineering:
      </p>
      <ul className="project-page-intro-end">
        <li>
          <strong>Next.js &amp; React:</strong> The latest versions, which gave
          me a great opportunity to dig into some of the newer patterns and
          conventions that have emerged in the React ecosystem.
        </li>
        <li>
          <strong>TypeScript:</strong> Type safety across the whole codebase.
          Given the number of interconnected pieces — project data, content
          components, routing — TypeScript kept things from getting messy.
        </li>
        <li>
          <strong>Motion:</strong> Handling animations for page transitions,
          hover effects, and UI flourishes. Getting these to feel smooth and
          natural rather than distracting was one of the more enjoyable
          challenges of the project.
        </li>
        <li>
          <strong>Resend:</strong> A clean, developer-friendly API for handling
          contact form email delivery without needing a backend.
        </li>
        <li>
          <strong>Plain CSS:</strong> No Tailwind or CSS-in-JS here — just
          well-organized stylesheets. Writing CSS by hand gives you a level of
          precision and intentionality that utility classes can sometimes paper
          over.
        </li>
      </ul>

      <h4>Design Approach</h4>
      <p>
        The visual design went through several rounds before landing where it is
        now. I wanted a clean, dark aesthetic with enough visual interest to
        feel considered — not just another dark-mode dev portfolio. Typography
        does a lot of heavy lifting here, and the color palette is intentionally
        restrained so that the work can speak for itself.
      </p>
      <p className="project-page-intro-end">
        The interactive elements were important to get right. Hover states, card
        animations, and page transitions all needed to feel responsive and
        intentional without being overdone. The goal was always to enhance the
        experience, not show off for its own sake.
      </p>

      <h4>Project Pages</h4>
      <p>
        One of the things I&apos;m most happy with is how the project pages
        work. Rather than static markdown files, each project&apos;s content is
        a full React component — which means any project can include whatever it
        needs to best tell its story. Some pages are primarily text and images;
        others (like Reacteroids) embed a fully interactive experience right on
        the page.
      </p>
      <div>
        <a href="/projects" className="jlm-link-button">
          Back to Projects
        </a>
      </div>
    </div>
  )
}
