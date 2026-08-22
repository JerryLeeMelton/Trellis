import SVGIcon from "@/components/svg/SVGIcon"
import TagElement from "@/components/cards/TagElement"
import Image from "next/image"
import type { ProjectContentProps } from "@/content/projects"
import Link from "next/link"

export default function TrellisContent({ tags }: ProjectContentProps) {
  return (
    <div className="project-page-content">
      <p>This is the project for the site you&apos;re currently on right now!</p>
      <Image
        src="/images/casestudies/trellis/trellis_hero.webp"
        alt="Polygon AI main interface"
        className="project-page-hero-image"
        width={1961}
        height={1196}
      />

      <div className="project-card-tags-container">
        <SVGIcon name="tag" size={22} />
        {tags.map((tag) => (
          <TagElement key={tag} tagName={tag} />
        ))}
      </div>
      <div className="project-page-github-link">
        <a
          href="https://github.com/JerryLeeMelton/Trellis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SVGIcon name="github" size={25} />
          Github Repo
          <SVGIcon name="externalLink" size={16} />
        </a>
      </div>

      <p>
        I&apos;m always very particular about my personal portfolio website, so I
        wanted to be sure to build it from scratch. There&apos;s a lot of high
        quality templates out there but I always wind up having to make more
        manual adjustments than I would like and the way that they&apos;re structured
        is never really to my liking. I wanted the site to be something I was
        proud to show off, so building it from the ground up seemed like a
        no-brainer in this situation.
      </p>

      <h4>Tech Stack</h4>

      <p>
        For this project I wanted to keep things modern without introducing
        unnecessary bloat. I wound up deciding on Next.js using Typescript. I&apos;ve
        been really enjoying the more self-contained nature of Next.js and just
        the overall structure of its projects, so I wanted an excuse to work
        more with it having come from working heavily with vanilla React at my
        previous job.
      </p>
      <p className="project-page-intro-end">
        In addition to Next.js, I decided to include MOtion for handling
        animations for page transitions, hover effects, and other UI niceties. I
        also included Resend as a clean, out of the box way to handle my contact
        form email delivery.
      </p>

      <div>
        <Link href="/projects" className="jlm-link-button">
          Back to Projects Page
        </Link>
      </div>
    </div>
  )
}
