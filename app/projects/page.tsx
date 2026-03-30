import {
  AnimDiv,
  AnimPage,
} from "@/components/animationComponents/AnimatedComponents"
import ProjectCard from "@/components/cards/ProjectCard"
import Image from "next/image"

export default function Projects() {
  return (
    <AnimPage className="main-content-container">
      <AnimDiv className="">
        <h1>My Projects</h1>
      </AnimDiv>
      <div className="projects-content-container">
        <AnimDiv className="project-cards">
          <ProjectCard projectName="testProject" />
        </AnimDiv>
        <AnimDiv className="project-cards">
          <ProjectCard projectName="testProject" />
        </AnimDiv>
        <AnimDiv className="project-cards">
          <ProjectCard projectName="testProject" />
        </AnimDiv>
        <AnimDiv className="project-cards">
          <ProjectCard projectName="testProject" />
        </AnimDiv>
      </div>
    </AnimPage>
  )
}
