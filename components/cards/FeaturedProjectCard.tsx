import Image from "next/image"
import Link from "next/link"
import { projectCardData } from "./projectCardData/ProjectCardData"
import SVGIcon from "../svg/SVGIcon"
import TagElement from "./TagElement"

interface FeaturedProjectCardProps {
  projectName: string
}

export default function FeaturedProjectCard({
  projectName,
}: FeaturedProjectCardProps) {
  const projectData = projectCardData[projectName]

  return (
    <Link
      href={`/projects/${projectName}`}
      className="featured-project-card-container project-card-link"
    >
      <div className="featured-project-card-image-container">
        <Image
          src={projectData.image}
          alt={`Image for ${projectName}`}
          width={400}
          height={200}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="project-card-image"
        />
      </div>
      <div className="featured-project-card-body">
        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>

        {/* <div className="project-card-tags-container">
          <SVGIcon name="tag" size={22} />
          {projectData.tags.map((tag) => (
            <TagElement key={tag} tagName={tag} />
          ))}
        </div> */}
      </div>
    </Link>
  )
}
