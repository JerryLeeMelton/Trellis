import ReacteroidsGame from "@/components/reacteroids/ReacteroidsGame"
import type { ProjectContentProps } from "@/content/projects"

export default function ReacteroidsContent({
  tags: _tags,
}: ProjectContentProps) {
  return (
    <div>
      <p className="reactoids-explainer-text">
        Click into the game to focus it and start playing!
      </p>
      <ReacteroidsGame
        crtOptions={{
          bloomIntensity: 0.8, // 0-1, glow around bright elements
          bloomSpread: 2.2, // blur radius for bloom passes
          scanlineIntensity: 0.3, // 0-1, darkness of scanline gaps
          grilleIntensity: 0.25, // 0-1, visibility of RGB phosphor stripes
          noiseIntensity: 1, // 0-1, analog static speckle
          brightnessBoost: 1.12, // multiplier to compensate for darkening
        }}
        className="reacteroids-game-wrapper"
      />
    </div>
  )
}
