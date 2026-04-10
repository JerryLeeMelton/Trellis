import SVGIcon from "../svg/SVGIcon"

interface SkillsCardProps {
  name: string
  size: number
}

export default function SkillsCard({ name, size }: SkillsCardProps) {
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
    case "rust":
      displayName = "Rust"
      break
    default:
      break
  }

  return (
    <div className="skills-card-container">
      <SVGIcon name={name} size={size} />
      <p>{displayName}</p>
    </div>
  )
}
