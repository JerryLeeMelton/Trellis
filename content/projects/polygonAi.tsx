import SVGIcon from "@/components/svg/SVGIcon"
import TagElement from "@/components/cards/TagElement"
import Image from "next/image"
import Link from "next/link"
import type { ProjectContentProps } from "@/content/projects"

export default function PolygonAiContent({ tags }: ProjectContentProps) {
  return (
    <div className="project-page-content">
      <Image
        src="/images/casestudies/polygon/polygon_casestudy_hero_cropped.webp"
        alt="Polygon AI main interface"
        className="project-page-hero-image"
        width={1200}
        height={630}
      />
      <div className="project-card-tags-container">
        <SVGIcon name="tag" size={22} />
        {tags.map((tag) => (
          <TagElement key={tag} tagName={tag} />
        ))}
      </div>

      <p>
        <span className="project-page-label">Challenge:</span>
        <Link
          href="https://rewire.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-page-text-link"
        >
          Rewire AI&apos;s
        </Link>{" "}
        app Pipsqueak Pro, now known as Polygon AI, offered powerful but highly
        technical and niche capabilities. However, its potential was hampered by
        an unfocused user interface design.
      </p>
      <p className="project-page-intro-end">
        <span className="project-page-label">Solution:</span>A rebranding and
        interface redesign to clarify UI sections, providing a more focused and
        cohesive user experience.
      </p>

      <h4>Original State</h4>
      <p>
        Initially, Pipsqueak Pro featured three panels with various nested
        functions, lacking a clear workflow for users. Features were not
        intuitively grouped, and the absence of a dedicated designer prior to my
        hiring led to unfocused visual styling, further contributing to user
        confusion.
      </p>
      <Image
        src="/images/casestudies/polygon/pipsqueakpro_main_screen.webp"
        alt="Pipsqueak Pro Main Screen"
        width={1200}
        height={800}
      />
      <div className="project-page-image-caption">
        Pipsqueak Pro main interface screen before I joined the team
      </div>

      <h4>Redesign Process</h4>
      <h6>Name and Logo</h6>
      <p>
        The team chose the name Polygon AI to better reflect the software&apos;s
        capabilities, which involve annotating images with shapes known as
        regions of interest (R.O.I.s), and to align with the company&apos;s
        AI-focused direction. As the newly hired designer, I had the opportunity
        to lead the redesign process, which began with the application&apos;s
        logo.
      </p>
      <Image
        src="/images/casestudies/polygon/pip_vs_poly_logos.webp"
        alt="Polygon vs Pipsqueak Logos"
        width={800}
        height={400}
      />
      <div className="project-page-image-caption">
        Old Pipsqueak Pro logo vs new Polygon AI logo
      </div>
      <p className="project-page-intro-end">
        After numerous sketches and iterations, we settled on a sleeker, edgier
        logo compared to the previous Pipsqueak Pro design. The angular logo
        aligned with the cutting-edge aesthetic we aimed for and set the
        creative direction for the interface design.
      </p>

      <h6>Interface Redesign</h6>
      <Image
        src="/images/casestudies/polygon/polygon_wireframes.webp"
        alt="Polygon Wireframes"
        width={1200}
        height={800}
      />
      <div className="project-page-image-caption">
        Wireframe sketches for the Polygon AI interface redesign
      </div>
      <p>
        When approaching the redesign of the interface for Polygon, one of the
        significant challenges was the non-linear user workflow. Users
        frequently moved between sections, completing tasks in their unique
        order. It was crucial to maintain this flexibility while improving
        visual organization.
      </p>
      <p className="project-page-intro-end">
        We retained the three-panel design but introduced icon-based buttons
        along the app&apos;s left and right borders for navigation. This created
        clear sections within the app while preserving a familiar layout for
        existing users.
      </p>

      <h4>Additional Features</h4>
      <h6>Color Themes</h6>
      <p>
        As part of the improvements to the user interface, I was also
        responsible for adding color themes to Polygon AI. This not only
        polished the app but also allowed users to personalize the appearance
        according to their preferences. The implementation was extensible,
        paving the way for additional themes in the future.
      </p>

      <h6>In-App Tutorials</h6>
      <p>
        Recognizing the need for direct guidance on specialized features, I
        developed a series of guided in-app tutorials. These tutorials improved
        usability and user retention, which directly translated into increased
        revenue for the company.
      </p>

      <h6>Analytics</h6>
      <p className="project-page-intro-end">
        Another important feature that I created for Polygon was the ability to
        track user analytics data. This helped the team to better understand
        user behavior and any potential pain points in the user experience.
      </p>

      <h4>Final Product</h4>
      <Image
        src="/images/casestudies/polygon/polygon_main_screen.webp"
        alt="Polygon AI final main screen"
        width={1200}
        height={800}
      />
      <div className="project-page-image-caption">
        Current Polygon AI main user interface
      </div>
      <p>
        Joining Rewire early in its development allowed me to make significant
        and impactful contributions to Polygon AI. I am extremely proud of my
        achievements with Polygon and am eager to apply the lessons learned to
        future projects.
      </p>
    </div>
  )
}
