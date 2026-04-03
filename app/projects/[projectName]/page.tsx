import { projectCardData } from "@/components/cards/projectCardData/ProjectCardData"
import {
  AnimPage,
  AnimDiv,
} from "@/components/animationComponents/AnimatedComponents"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectName: string }>
}) {
  const { projectName } = await params
  const projectData = projectCardData[projectName]

  return (
    <AnimPage className="main-content-container">
      <AnimDiv className="">
        <h1>{projectData.title}</h1>
        <p>{projectData.description}</p>
      </AnimDiv>
    </AnimPage>
  )
}
