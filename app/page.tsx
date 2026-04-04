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
        <div className="intro-text-and-hero-image-container">
          <div className="intro-text-container">
            <AnimH2>Hello!</AnimH2>
            <AnimH1>
              I'm <span className="text-accent-main">Jerry Lee Melton</span>.
            </AnimH1>
            <AnimH3>Full-Stack Developer based in Portland, Oregon. 🇺🇸</AnimH3>
            <AnimP>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, molestias? Asperiores minima veniam delectus rerum
              quaerat eaque placeat rem ipsum nobis, omnis aliquam, magni est
              voluptatum, eum alias nesciunt dignissimos.
            </AnimP>
            {/* Resume & Social Links */}
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
            </AnimDiv>
          </div>
          <AnimDiv className="greeting-image-container">
            <Image
              src="/images/jerry_hero_fullSize.webp"
              alt="Picture of Jerry Lee Melton"
              width={600}
              height={600}
              className="intro-image img-zoom"
            />
          </AnimDiv>
        </div>
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
      {/* <section className="featured-posts-section-container">
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
      </section> */}
    </AnimPage>
  )
}
