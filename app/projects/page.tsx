import ProjectCard from "@/components/cards/ProjectCard"
import Image from "next/image"

export default function Projects() {
  return (
    <section className="main-content-container">
      <div className="">
        <h1>My Projects</h1>
      </div>
      <div className="projects-content-container">
        <div className="project-cards">
          <ProjectCard projectName="testProject" />
          <ProjectCard projectName="testProject" />
          <ProjectCard projectName="testProject" />
          <ProjectCard projectName="testProject" />
        </div>
      </div>
    </section>
  )
}
