import SVGIcon from "@/components/svg/SVGIcon"
import Image from "next/image"
import {
  AnimDiv,
  AnimPage,
} from "@/components/animationComponents/AnimatedComponents"

export default function About() {
  return (
    <AnimPage className="main-content-container">
      <AnimDiv>
        <h1>About Me</h1>
      </AnimDiv>

      <AnimDiv className="about-content-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          blanditiis optio esse maxime ad aut, consequatur quisquam autem rerum
          delectus. Natus, dolorum? Animi dolor sunt et ut recusandae! Animi,
          nesciunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur blanditiis optio esse maxime ad aut, consequatur quisquam
          autem rerum delectus. Natus, dolorum? Animi dolor sunt et ut
          recusandae! Animi, nesciunt?
        </p>
        <div>
          <Image
            src="/images/placeholder.webp"
            alt="Picture of Jerry Lee Melton"
            width={300}
            height={300}
            className="intro-image"
          />
        </div>
      </AnimDiv>
      <AnimDiv className="about-social-links-container">
        <a href="/resume" target="_blank" rel="noopener noreferrer">
          <SVGIcon name="file" size={19} />
          Resume
        </a>
        <span>|</span>
        <a href="https://github.com/JerryLeeMelton" target="_blank">
          <SVGIcon name="github" size={25} />
          Github
        </a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/jerryleemelton/" target="_blank">
          <SVGIcon name="linkedin" size={22} />
          LinkedIn
        </a>
      </AnimDiv>

      <AnimDiv>
        <h2>Cat Pics!</h2>
      </AnimDiv>
      <AnimDiv className="about-content-container">
        <div className="cat-pics-container">
          <Image
            src="/images/cat1.jpg"
            alt="Hank"
            width={300}
            height={300}
            className="cat-image"
          />
          <Image
            src="/images/cat2.jpg"
            alt="Josie"
            width={300}
            height={300}
            className="cat-image"
          />
          <Image
            src="/images/cat3.jpg"
            alt="Dorian"
            width={300}
            height={300}
            className="cat-image"
          />
        </div>
      </AnimDiv>
    </AnimPage>
  )
}
