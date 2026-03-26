import ProjectCard from "@/components/cards/FeaturedProjectCard copy"
import Image from "next/image"

export default function Projects() {
  return (
    <section className="main-content-container">
      <div className="">
        <h1>My Projects</h1>
      </div>
      <div className="projects-content-container">
        <div className="project-card">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  )
}
