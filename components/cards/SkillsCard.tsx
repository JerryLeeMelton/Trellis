import Image from "next/image"
import SVGIcon from "../svg/SVGIcon"

interface SkillsCardProps {
  name: string
}

// Typescript
// HTML 5
// CSS
// Golang
// React
// Next.js
// PostgreSQL
// Docker

export default function SkillsCard({ name }: SkillsCardProps) {
  let displayName = ""

  switch (name) {
    case "typescript":
      displayName = "Typescript"
      break
    case "html5":
      displayName = "HTML 5"
      break
    case "css":
      displayName = "CSS"
      break
    case "golang":
      displayName = "Golang"
      break
    case "react":
      displayName = "React"
      break
    case "nextjs":
      displayName = "Next.js"
      break
    case "postgresql":
      displayName = "PostgreSQL"
      break
    case "docker":
      displayName = "Docker"
      break
    default:
      break
  }

  return (
    <div className="skills-card-container">
      <SVGIcon name={name} size={48} />
      <p>{displayName}</p>
    </div>
  )
}
