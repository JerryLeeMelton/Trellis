import ReacteroidsGame from "@/components/reacteroids/ReacteroidsGame"
import SVGIcon from "@/components/svg/SVGIcon"
import TagElement from "@/components/cards/TagElement"
import type { ProjectContentProps } from "@/content/projects"

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
        <span className="project-page-label">Challenge:</span>
        Classic arcade games are deceptively simple. Asteroids looks like a few
        triangles bouncing around a screen, but underneath it&apos;s a tightly
        tuned system of physics, collision detection, spawning logic, and game
        feel. I wanted to build it from scratch — no game engines, no physics
        libraries — to really understand what makes it tick.
      </p>
      <p className="project-page-intro-end">
        <span className="project-page-label">Solution:</span>
        Reacteroids is a fully featured clone of the 1979 Atari arcade classic,
        built entirely with React, TypeScript, and the Canvas API. It lives
        right here in this portfolio — go ahead and give it a try below.
      </p>

      <p className="reactoids-explainer-text">
        Click into the game to focus it and start playing!
      </p>
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

      <h4>Zero Dependencies</h4>
      <p>
        The core constraint I set for this project was that the game logic had
        to be entirely dependency-free. No libraries for physics, no game engine
        scaffolding — just TypeScript, the Canvas API, and a game loop driven by{" "}
        <code>requestAnimationFrame</code>. Everything from asteroid spawning to
        bullet collision to the saucer AI is implemented by hand.
      </p>
      <p className="project-page-intro-end">
        This turned out to be one of the most educational decisions I made.
        There&apos;s a big difference between understanding game development in
        theory and actually having to implement momentum, wrap-around edges, and
        multi-stage asteroid splitting yourself.
      </p>

      <h4>Game Architecture</h4>
      <p>
        The engine is structured around a pure <code>updateGame</code> function
        that takes the current game state and a delta time value and returns the
        next state. Rendering is handled separately in a dedicated renderer
        module, keeping game logic and display concerns cleanly separated. The
        React component is responsible only for running the game loop and wiring
        up keyboard input — it doesn&apos;t know anything about how the game
        works internally.
      </p>
      <ul className="project-page-intro-end">
        <li>
          <strong>Game Engine:</strong> Handles all simulation — ship movement,
          asteroid physics, bullet lifetime, saucer spawning and AI, collision
          detection, scoring, and wave progression.
        </li>
        <li>
          <strong>Renderer:</strong> Draws every frame to an offscreen canvas
          context, keeping visual concerns isolated from game logic.
        </li>
        <li>
          <strong>CRT Filter:</strong> A multi-pass post-processing pipeline
          that composites bloom, aperture grille, scanlines, and analog noise
          over the rendered frame before displaying it. The effect is inspired
          by classic Trinitron RGB monitors.
        </li>
        <li>
          <strong>Score System:</strong> Persists high scores to localStorage
          with support for a remote API endpoint if one is configured. Players
          can enter a three-letter name in classic arcade fashion.
        </li>
      </ul>

      <h4>The CRT Effect</h4>
      <p>
        One of the most satisfying parts of this project was building the CRT
        post-processing filter. Modern Asteroids recreations often just render
        clean vector lines — but those arcade cabinets had a specific look that
        came from the phosphor glow and the imperfections of the display
        hardware. I wanted to capture that.
      </p>
      <p className="project-page-intro-end">
        The filter runs as a series of canvas compositing passes: the game
        renders to an offscreen buffer at full resolution, then bloom is
        computed at quarter resolution and blended back, then aperture grille
        and scanline overlay patterns are applied, and finally a frame of
        animated noise adds the analog static texture. The whole pipeline runs
        every frame at 60fps without a noticeable hit to performance.
      </p>

      <h4>Game Feel</h4>
      <p>
        The original Asteroids has a very specific feel to it — the ship drifts
        with real momentum, bullets have a limited lifetime that forces you to
        be accurate, and the UFO adds just enough pressure without being unfair.
        Getting the numbers right took a lot of tuning. Things like rotation
        speed, thrust acceleration, drag, bullet speed, and asteroid velocity
        all had to be balanced against each other until it felt right.
      </p>
      <p>
        The game also includes a hyperspace jump, extra lives at score
        milestones, wave announcements, and a proper game over flow — all the
        details that made the original feel complete rather than like a tech
        demo.
      </p>
      <div>
        <a href="/projects" className="jlm-link-button">
          Back to Projects Page
        </a>
      </div>
    </div>
  )
}
