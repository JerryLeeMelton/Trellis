import {
  AnimDiv,
  AnimH1,
  AnimH4,
  AnimP,
  AnimPage,
} from "@/components/animationComponents/AnimatedComponents"
import FeaturedProjectCard from "@/components/cards/FeaturedProjectCard"
import LatestPostsCard from "@/components/cards/LatestPostsCard"
import SkillsCard from "@/components/cards/SkillsCard"
import SVGIcon from "@/components/svg/SVGIcon"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <AnimPage className="main-content-container">
      {/* Intro Section ========================= */}
      <section className="intro-section-container">
        <div className="intro-text-and-hero-image-container">
          <div className="intro-text-container">
            <AnimH1>
              Hello! I'm <span className="text-accent-main">Jerry</span>.
            </AnimH1>
            <AnimH4>Full-Stack Developer based in Portland, Oregon.</AnimH4>
            <AnimP className="intro-text">
              I live to make things. I have three years of experience as a
              software engineer and ten years of experience in design.
            </AnimP>
            {/* Resume & Social Links */}
            <AnimDiv className="intro-social-links-container">
              <Link
                href="/resume/JerryLeeMelton_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGIcon name="file" size={19} />
                Resume
              </Link>
              <span className="opacity-40">|</span>
              <Link
                href="https://github.com/JerryLeeMelton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGIcon name="github" size={25} />
                Github
              </Link>
              <span className="opacity-40">|</span>
              <Link
                href="https://www.linkedin.com/in/jerryleemelton/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGIcon name="linkedin" size={22} />
                LinkedIn
              </Link>
            </AnimDiv>
          </div>
          <AnimDiv className="greeting-image-container">
            <Image
              src="/images/jerry_hero_fullSize.webp"
              alt="Picture of Jerry Lee Melton"
              width={600}
              height={600}
              className="intro-image img-zoom"
              priority
            />
          </AnimDiv>
        </div>
      </section>
      <AnimDiv className="featured-projects-section-container">
        <div>
          <AnimDiv className="featured-projects-title">
            <h2>Featured Projects</h2>{" "}
            <Link href="/projects">
              View All
              <SVGIcon name="arrowRight" size={19} />
            </Link>
          </AnimDiv>
          {/* <AnimDiv>
            <Link href="/projects">View All...</Link>
          </AnimDiv> */}
        </div>
        <AnimDiv className="featured-projects-cards-container">
          <FeaturedProjectCard projectName="polygonAi" />
          <FeaturedProjectCard projectName="chessAi" />
          <FeaturedProjectCard projectName="chessAi" />
        </AnimDiv>
      </AnimDiv>
      <AnimDiv className="skills-section-container">
        <SkillsCard name="typescript" size={26} />
        <SkillsCard name="html5" size={26} />
        <SkillsCard name="css" size={26} />
        <SkillsCard name="golang" size={26} />
        <SkillsCard name="react" size={26} />
        <SkillsCard name="nextjs" size={26} />
        <SkillsCard name="postgresql" size={26} />
        <SkillsCard name="docker" size={26} />
        {/* <SkillsCard name="rust" size={26} /> */}
      </AnimDiv>

      {/* TODO: Implement Latest Posts Section */}
      {/* <section className="featured-posts-section-container">
        <AnimDiv>
          <div>
            <h2>Latest Posts</h2>
          </div>
          <div>
            <Link href="/projects">View All...</Link>
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
