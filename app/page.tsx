import {
  AnimDiv,
  AnimH1,
  AnimH2,
  AnimH3,
  AnimP,
  AnimPage,
} from "@/components/animationComponents/AnimatedComponents"
import FeaturedProjectCard from "@/components/cards/FeaturedProjectCard"
import LatestPostsCard from "@/components/cards/LatestPostsCard"
import SkillsCard from "@/components/cards/SkillsCard"
import SVGIcon from "@/components/svg/SVGIcon"
import Image from "next/image"

export default function Home() {
  return (
    <AnimPage className="main-content-container">
      {/* Intro Section ========================= */}
      <section className="intro-section-container">
        {/* Greeting */}
        <div className="greeting-container">
          <div className="greeting-text-container">
            <AnimH2>Hello!</AnimH2>
            <AnimH1>
              I'm <span className="text-accent-main">Jerry Lee Melton</span>.
            </AnimH1>
            <AnimH3>Full-Stack Developer based in Portland, Oregon. 🇺🇸</AnimH3>
          </div>
          {/* Intro text and hero image */}
          <div className="intro-text-and-hero-image-container">
            <div>
              <AnimP>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus, molestias? Asperiores minima veniam delectus rerum
                quaerat eaque placeat rem ipsum nobis, omnis aliquam, magni est
                voluptatum, eum alias nesciunt dignissimos. Asperiores minima
                veniam delectus rerum quaerat eaque placeat rem ipsum nobis,
                omnis aliquam, magni est voluptatum, eum alias nesciunt
                dignissimos.
              </AnimP>
            </div>
            <AnimDiv className="greeting-image-container">
              <Image
                // src="/images/jerry_hero.jpg"
                src="/images/placeholder.webp"
                alt="Picture of Jerry Lee Melton"
                width={300}
                height={300}
                className="intro-image"
              />
            </AnimDiv>
          </div>
        </div>
        {/* Resume, Social Links, About Link */}
        <AnimDiv className="intro-social-links-container">
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
        </AnimDiv>
      </section>
      <AnimDiv className="skills-section-container">
        <SkillsCard name="typescript" size={26} />
        <SkillsCard name="html5" size={26} />
        <SkillsCard name="css" size={26} />
        <SkillsCard name="golang" size={26} />
        <SkillsCard name="react" size={26} />
        <SkillsCard name="nextjs" size={26} />
        <SkillsCard name="postgresql" size={26} />
        <SkillsCard name="docker" size={26} />
      </AnimDiv>
      <section className="featured-projects-section-container">
        <div>
          <AnimDiv>
            <h2>Featured Projects</h2>
          </AnimDiv>
          <AnimDiv>
            <a href="/projects">View All...</a>
          </AnimDiv>
        </div>
        <AnimDiv className="featured-projects-cards-container">
          <FeaturedProjectCard />

          <FeaturedProjectCard />
        </AnimDiv>
      </section>
      <section className="featured-projects-section-container">
        <AnimDiv>
          <div>
            <h2>Latest Posts</h2>
          </div>
          <div>
            <a href="/projects">View All...</a>
          </div>
        </AnimDiv>
        <AnimDiv className="featured-projects-cards-container">
          <LatestPostsCard />

          <LatestPostsCard />
        </AnimDiv>
      </section>
    </AnimPage>
  )
}
