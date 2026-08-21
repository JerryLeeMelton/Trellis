import type { Metadata } from "next"
import {
  AnimDiv,
  AnimPage,
} from "@/components/animationComponents/AnimatedComponents"
import ProjectCard from "@/components/cards/ProjectCard"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects built by Jerry Lee Melton, spanning web apps, desktop tools, and AI integrations.",
  alternates: { canonical: "/projects" },
}

export default function Projects() {
  return (
    <AnimPage className="main-content-container">
      <AnimDiv className="">
        <h1>My Projects</h1>
      </AnimDiv>
      <div className="projects-content-container">
        <AnimDiv className="project-cards">
          <ProjectCard projectName="polygonAi" />
        </AnimDiv>
        <AnimDiv className="project-cards">
          <ProjectCard projectName="trellis" />
        </AnimDiv>
        <AnimDiv className="project-cards">
          <ProjectCard projectName="reacteroids" />
        </AnimDiv>
        <AnimDiv className="project-cards">
          <ProjectCard projectName="nomenator" />
        </AnimDiv>
      </div>
    </AnimPage>
  )
}
