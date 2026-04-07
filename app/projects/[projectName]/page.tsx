import type { Metadata } from "next"
import { projectCardData } from "@/components/cards/projectCardData/ProjectCardData"
import { projectContent } from "@/content/projects"
import {
  AnimPage,
  AnimDiv,
} from "@/components/animationComponents/AnimatedComponents"
import { notFound } from "next/navigation"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectName: string }>
}): Promise<Metadata> {
  const { projectName } = await params
  const project = projectCardData[projectName]
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — Jerry Lee Melton`,
      description: project.description,
      url: `/projects/${projectName}`,
    },
  }
}

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
        <ProjectContent tags={projectData.tags} />
      </AnimDiv>
    </AnimPage>
  )
}
