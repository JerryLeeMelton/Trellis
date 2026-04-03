import { projectCardData } from "@/components/cards/projectCardData/ProjectCardData"
import { projectContent } from "@/content/projects"
import {
  AnimPage,
  AnimDiv,
} from "@/components/animationComponents/AnimatedComponents"
import { notFound } from "next/navigation"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectName: string }>
}) {
  const { projectName } = await params
  const projectData = projectCardData[projectName]
  const ProjectContent = projectContent[projectName]

  if (!projectData || !ProjectContent) {
    notFound()
  }

  return (
    <AnimPage className="main-content-container">
      <AnimDiv className="">
        <h1>{projectData.title}</h1>
        <ProjectContent />
      </AnimDiv>
    </AnimPage>
  )
}
