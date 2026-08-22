import ReacteroidsGame from "@/components/reacteroids/ReacteroidsGame"
import SVGIcon from "@/components/svg/SVGIcon"
import TagElement from "@/components/cards/TagElement"
import type { ProjectContentProps } from "@/content/projects"
import Link from "next/link"

export default function ReacteroidsContent({ tags }: ProjectContentProps) {
  return (
    <div className="project-page-content">
      <div className="project-card-tags-container">
        <SVGIcon name="tag" size={22} />
        {tags.map((tag) => (
          <TagElement key={tag} tagName={tag} />
        ))}
      </div>

      <p>
        For this project, I really wanted to build something fun for my
        portfolio website. While I&apos;ve dabbled in making things with game engines
        before (Unity and Godot), for this project I wanted to really get into
        the weeds and build the game from scratch.
      </p>

      <div className="reacteroids-explainer-text">
        <p>Click the game screen to focus it and start playing!</p>
      </div>
      <ReacteroidsGame
        crtOptions={{
          bloomIntensity: 0.8,
          bloomSpread: 2.2,
          scanlineIntensity: 0.3,
          grilleIntensity: 0.25,
          noiseIntensity: 1,
          brightnessBoost: 1.12,
        }}
        className="reacteroids-game-wrapper"
      />

      <h4>No Dependencies</h4>
      <p>
        In addion to not using a game engine, another constraint I placed on
        this project was that it shouldn&apos;t require any dependencies. I wanted to
        see how much you can do with just the tools that the browser provides.
      </p>
      <p className="project-page-intro-end">
        This turned out to be super educational. It&apos;s amazing what you can do
        with just Typescript and the Canvas API!
      </p>

      <h4>Game Architecture</h4>
      <p className="project-page-intro-end">
        Taking cues from my experience using game engines like Godot or Unity, I
        structured the game around an <code>updateGame</code> function that
        takes the current game state and a delta time value and returns the next
        game state. Rendering is handled separately in a dedicated renderer
        module, keeping the logic for the game and rendering neatly separated.
        The React component that houses the game is only responsible for running
        the game loop and handling keyboard input. It doesn&apos;t know and doesn&apos;t
        care about how the game works internally.
      </p>

      <h4>CRT Effect</h4>
      <p>
        One my favorite parts of this project was building the CRT filter.
        Growing up my folks would take me and my brother to an arcade with an
        extensive collection of retro games. The CRT displays that were standard
        at the time gave all of those old games a certain look and feel that
        I&apos;ve always loved so I wanted to capture a bit of that magic in this
        project.
      </p>
      <p className="project-page-intro-end">
        The final filter runes a series of canvas compositing passes. The game
        itself renders to a buffer at full resolution, then bloom is applied to
        the image at quarter resolution and blended in, with the aperture grille
        and scanline overlays being applied after that. Finally, noise is
        applied to each frame of animation to add in one last bit of analog grit
        to the image. The whole stack is applied every frame at 60FPS and runs
        silky smooth.
      </p>

      <h4>Game Feel</h4>
      <p className="project-page-intro-end">
        The original Asteroids, like any classic arcade game, has a really great
        and really specific game feel. Things like the ship&apos;s drifting momentum,
        the speed and lifetime of bullets, and the way that asteroids break up
        when hit all required lots of tuning to get right. It may not be 100%
        accurate to the original, but I&apos;m really happy with the balance that I
        landed on for this project.
      </p>
      <div>
        <Link href="/projects" className="jlm-link-button">
          Back to Projects Page
        </Link>
      </div>
    </div>
  )
}
