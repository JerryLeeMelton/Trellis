import FeaturedProjectCard from "@/components/cards/FeaturedProjectCard"
import LatestPostsCard from "@/components/cards/LatestPostsCard"
import SkillsCard from "@/components/cards/SkillsCard"
import SVGIcon from "@/components/svg/SVGIcon"
import Image from "next/image"

export default function Home() {
  return (
    <div className="main-page-container">
      {/* Intro Section ========================= */}
      <section className="intro-section-container">
        <div className="greeting-container">
          <div className="greeting-text-container">
            <h1>
              Hello! I'm{" "}
              <span className="text-accent-main">Jerry Lee Melton</span>.
            </h1>
            <h3>Full-Stack Developer based in Portland, Oregon. 🇺🇸</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, molestias? Asperiores minima veniam delectus rerum
              quaerat eaque placeat rem ipsum nobis, omnis aliquam, magni est
              voluptatum, eum alias nesciunt dignissimos. Asperiores minima
              veniam delectus rerum quaerat eaque placeat rem ipsum nobis, omnis
              aliquam, magni est voluptatum, eum alias nesciunt dignissimos.
            </p>
          </div>
          <div className="greeting-image-container">
            <Image
              src="/images/jerry_hero.jpg"
              alt="Picture of Jerry Lee Melton"
              width={300}
              height={300}
              className="intro-image"
            />
          </div>
        </div>
        {/* Resume and Social Links */}
        <div className="intro-social-links-container">
          <div>
            <SVGIcon name="resume" size={24} />
            <button>Resume</button>
          </div>
          <div>
            <button>
              <SVGIcon name="github" size={24} /> Github
            </button>
          </div>
          <div>
            <button>
              <SVGIcon name="linkedin" size={24} /> LinkedIn
            </button>
          </div>
          <div>
            <a href="/about">More about me...</a>
          </div>
        </div>
      </section>
      <section className="skills-section-container">
        <SkillsCard name="typescript" />
        <SkillsCard name="html5" />
        <SkillsCard name="css" />
        <SkillsCard name="golang" />
        <SkillsCard name="react" />
        <SkillsCard name="nextjs" />
        <SkillsCard name="postgresql" />
        <SkillsCard name="docker" />
      </section>
      <section className="featured-projects-section-container">
        <div>
          <div>
            <h2>Featured Projects</h2>
          </div>
          <div>
            <a href="/projects">View All...</a>
          </div>
        </div>
        <div className="featured-projects-cards-container">
          <FeaturedProjectCard />

          <FeaturedProjectCard />
        </div>
      </section>
      <section className="featured-projects-section-container">
        <div>
          <div>
            <h2>Latest Posts</h2>
          </div>
          <div>
            <a href="/projects">View All...</a>
          </div>
        </div>
        <div className="featured-projects-cards-container">
          <LatestPostsCard />

          <LatestPostsCard />
        </div>
      </section>
    </div>
  )
}
