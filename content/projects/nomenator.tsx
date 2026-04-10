import SVGIcon from "@/components/svg/SVGIcon"
import TagElement from "@/components/cards/TagElement"
import Image from "next/image"
import type { ProjectContentProps } from "@/content/projects"

export default function NomenatorContent({ tags }: ProjectContentProps) {
  return (
    <div className="project-page-content">
      <Image
        src="/images/casestudies/nomenator/Nomenator_Portfolio_HeroImage_cropped.webp"
        alt="Nomenator file renamer application"
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
        Many existing file renaming apps, while powerful, come with UIs that
        feel dated. I wanted a modern solution with an intuitive layout and
        polish that could handle batch renaming tasks without the clunky,
        old-school feel of the existing options.
      </p>
      <p className="project-page-intro-end">
        <span className="project-page-label">Solution:</span>I created
        Nomenator, a desktop file renaming utility built with Electron, React,
        Redux, and Tailwind, with Go language integration for the renaming
        logic. This approach allowed me to deliver a more refined user
        experience without sacrificing performance. The clean interface and
        real-time previews help users quickly see how changes will look, all
        within a clean, modern aesthetic.
      </p>

      <h4>Existing Solutions</h4>
      <p>
        In my career as a designer and photographer, I&apos;ve often had the
        need to rename many files at a time. I&apos;ve used many existing
        applications, but even many of the best options seem to have user
        interfaces that feel outdated.
      </p>
      <Image
        src="/images/casestudies/nomenator/old_ui_example.webp"
        alt="Examples of outdated file renamer UI designs"
        width={1200}
        height={800}
      />
      <div className="project-page-image-caption">
        Examples of outdated UI design
      </div>
      <p className="project-page-intro-end">
        When working on Nomenator, my main goal was to create something with
        all of the power and utility of those older applications, but with more
        modern design sensibilities. I wanted the user experience to be as
        seamless and refined as possible.
      </p>

      <h4>Tech Stack</h4>
      <p>
        Among the first decisions that I made for the app was the choice of the
        tech stack that I&apos;d use to build the app. After some consideration,
        I decided on the following configuration:
      </p>
      <ul className="project-page-intro-end">
        <li>
          <strong>Electron &amp; React:</strong> Electron provided the ability
          to create a cross-platform desktop experience with a single codebase.
        </li>
        <li>
          <strong>Redux:</strong> I felt Redux was essential to allow the
          management of application state, including lists of files, rename
          rules, and user selections.
        </li>
        <li>
          <strong>Tailwind CSS:</strong> Despite Tailwind having been on my
          radar for some time, I had never used it before so I very much wanted
          to try it out for this project. It turned out to be helpful in rapid
          styling with a modern, consistent look.
        </li>
        <li>
          <strong>Go Integration:</strong> For this project, I wanted to explore
          the idea of using different languages together in the same project.
          Because of its high performance, Go turned out to be a great candidate
          for the preview and rename operations.
        </li>
      </ul>

      <h4>Interface Design</h4>
      <Image
        src="/images/casestudies/nomenator/nomenator_main_screen.webp"
        alt="Nomenator main interface screen"
        width={1200}
        height={800}
      />
      <div className="project-page-image-caption">Nomenator UI</div>
      <p>
        Since the design of other similar apps was my primary reason for wanting
        to take on this project, it was very important to me to get that aspect
        of Nomenator right. Some of the key design decisions include:
      </p>
      <ul className="project-page-intro-end">
        <li>
          <strong>Two-panel layout:</strong> I chose a two panel layout for the
          app to make sure that the user always sees what they&apos;re working
          on along with the list of files and previews of operations. The top
          panel is for the main user interactions while the bottom panel is
          reserved for displaying the list of working files and their previewed
          names.
        </li>
        <li>
          <strong>Two-tab layout:</strong> Since the workflow of the app is
          divided into two distinct operations&mdash;selecting files and then
          creating rename rules for them&mdash;I thought that a two tab layout
          for the top panel would be a great way to divide up the UI.
        </li>
        <li>
          <strong>Strong visual feedback:</strong> I have made sure that there
          is strong visual feedback (such as hover effects, animations, etc.)
          when the user takes action in the app so that the app is as clear as
          possible.
        </li>
        <li>
          <strong>Custom title bar:</strong> The standard Electron title bar
          works fine, but I wanted to provide a presentation that went beyond
          &ldquo;default&rdquo;.
        </li>
      </ul>

      <h4>Looking Forward</h4>
      <p>
        While I&apos;m proud of the work that I&apos;ve done so far on
        Nomenator, I&apos;d like to continue to make improvements to the app
        until it&apos;s the definitive file renaming application. Some of the
        planned additional features include:
      </p>
      <ul>
        <li>
          <strong>Drag and drop functionality:</strong> The ability to drag and
          drop items&mdash;both within the rename rules section and into the
          directory selection section&mdash;would go a long way in making the
          app more user friendly.
        </li>
        <li>
          <strong>Undo/Redo:</strong> I think this is an essential feature to
          have in an app that deals with files on the user&apos;s computer.
        </li>
        <li>
          <strong>Expanded rename rule options:</strong> Adding more powerful
          renaming features to the app would allow users to do exactly what they
          want to do, no matter how complex their renaming tasks might be.
        </li>
        <li>
          <strong>Saving/Loading of rename rule presets:</strong> For users who
          do a lot of the same or similar operations on a regular basis, this
          would be, in my opinion, a game changer.
        </li>
      </ul>
    </div>
  )
}
