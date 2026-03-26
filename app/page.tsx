import FeaturedProjectCard from "@/components/cards/FeaturedProjectCard"
import LatestPostsCard from "@/components/cards/LatestPostsCard"
import SkillsCard from "@/components/cards/SkillsCard"
import SVGIcon from "@/components/svg/SVGIcon"
import Image from "next/image"

export default function Home() {
  return (
    <div className="main-content-container">
      {/* Intro Section ========================= */}
      <section className="intro-section-container">
        {/* Greeting */}
        <div className="greeting-container">
          <div className="greeting-text-container">
            <h2>Hello!</h2>
            <h1>
              I'm <span className="text-accent-main">Jerry Lee Melton</span>.
            </h1>
            <h3>Full-Stack Developer based in Portland, Oregon. 🇺🇸</h3>
          </div>
          {/* Intro text and hero image */}
          <div className="intro-text-and-hero-image-container">
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus, molestias? Asperiores minima veniam delectus rerum
                quaerat eaque placeat rem ipsum nobis, omnis aliquam, magni est
                voluptatum, eum alias nesciunt dignissimos. Asperiores minima
                veniam delectus rerum quaerat eaque placeat rem ipsum nobis,
                omnis aliquam, magni est voluptatum, eum alias nesciunt
                dignissimos.
              </p>
            </div>
            <div className="greeting-image-container">
              <Image
                // src="/images/jerry_hero.jpg"
                src="/images/placeholder.webp"
                alt="Picture of Jerry Lee Melton"
                width={300}
                height={300}
                className="intro-image"
              />
            </div>
          </div>
        </div>
        {/* Resume, Social Links, About Link */}
        <div className="intro-social-links-container">
          <a href="/resume" target="_blank" rel="noopener noreferrer">
            <SVGIcon name="file" size={19} />
            Resume
          </a>
          <span className="opacity-40">|</span>
          <a
            href="https://github.com/JerryLeeMelton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGIcon name="github" size={25} />
            Github
          </a>
          <span className="opacity-40">|</span>
          <a
            href="https://www.linkedin.com/in/jerryleemelton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGIcon name="linkedin" size={22} />
            LinkedIn
          </a>
          <span className="opacity-40">|</span>
          <a href="/about">
            More about me <SVGIcon name="arrowRight" size={16} />
          </a>
        </div>
      </section>
      <section className="skills-section-container">
        <SkillsCard name="typescript" size={26} />
        <SkillsCard name="html5" size={26} />
        <SkillsCard name="css" size={26} />
        <SkillsCard name="golang" size={26} />
        <SkillsCard name="react" size={26} />
        <SkillsCard name="nextjs" size={26} />
        <SkillsCard name="postgresql" size={26} />
        <SkillsCard name="docker" size={26} />
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
