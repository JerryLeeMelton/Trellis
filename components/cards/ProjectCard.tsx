import Image from "next/image"
import Link from "next/link"
import { projectCardData } from "./projectCardData/ProjectCardData"
import SVGIcon from "../svg/SVGIcon"
import TagElement from "./TagElement"

interface ProjectCardProps {
  projectName: string
}

export default function ProjectCard({ projectName }: ProjectCardProps) {
  const projectData = projectCardData[projectName]

  return (
    <Link href={`/projects/${projectName}`} className="project-card-container project-card-link">
      <div>
        <Image
          src="/images/placeholder.webp"
          alt={`Image for ${projectName}`}
          width={400}
          height={200}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="project-card-image"
        />
      </div>
      <div>
        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>

        <div className="project-card-tags-container">
          <SVGIcon name="tag" size={22} />
          {projectData.tags.map((tag) => (
            <TagElement key={tag} tagName={tag} />
          ))}
        </div>
      </div>
    </Link>
  )
}
