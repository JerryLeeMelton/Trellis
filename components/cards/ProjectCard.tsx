import Image from "next/image"
import { projectCardData } from "./projectCardData/ProjectCardData"

interface ProjectCardProps {
  projectName: string
}

export default function ProjectCard({ projectName }: ProjectCardProps) {
  const projectData = projectCardData[projectName]

  return (
    <div className="project-card-container">
      <div>
        <Image
          src="/images/placeholder.webp"
          alt={`Image for ${projectName}`}
          width={400}
          height={200}
          className="project-card-image"
        />
      </div>
      <div>
        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>
        <p>
          <strong>Technologies Used:</strong> {projectData.tags.join(", ")}
        </p>
      </div>
    </div>
  )
}
