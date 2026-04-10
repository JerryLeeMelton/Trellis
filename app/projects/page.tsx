import type { Metadata } from "next"
import {
  AnimDiv,
  AnimPage,
} from "@/components/animationComponents/AnimatedComponents"
import ProjectCard from "@/components/cards/ProjectCard"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects built by Jerry Lee Melton, spanning web apps, desktop tools, and AI integrations.",
  openGraph: {
    title: "Projects — Jerry Lee Melton",
    description:
      "A collection of projects built by Jerry Lee Melton, spanning web apps, desktop tools, and AI integrations.",
    url: "/projects",
  },
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
