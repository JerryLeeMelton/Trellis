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
        <div className="about-text-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur blanditiis optio esse maxime ad aut, consequatur
            quisquam autem rerum delectus. Natus, dolorum? Animi dolor sunt et
            ut recusandae! Animi, nesciunt? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Consequuntur blanditiis optio esse
            maxime ad aut, consequatur quisquam autem rerum delectus. Natus,
            dolorum? Animi dolor sunt et ut recusandae! Animi, nesciunt?
          </p>
          <div className="about-social-links-container">
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
            <a
              href="https://www.linkedin.com/in/jerryleemelton/"
              target="_blank"
            >
              <SVGIcon name="linkedin" size={22} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="about-image-container">
          <Image
            src="/images/jerry_about_fullSize.webp"
            alt="Picture of Jerry Lee Melton"
            width={600}
            height={600}
            className="about-image img-zoom"
          />
        </div>
      </AnimDiv>

      <AnimDiv>
        <h2>Cat Pics!</h2>
      </AnimDiv>
      <AnimDiv className="cat-pics-container">
        <div>
          <Image
            src="/images/hank_001_fullSize.webp"
            alt="Hank"
            width={300}
            height={300}
            className="cat-image img-zoom"
          />
          <p className="cat-pic-label">Hank</p>
        </div>
        <div>
          <Image
            src="/images/josie_001_fullSize.webp"
            alt="Josie"
            width={300}
            height={300}
            className="cat-image img-zoom"
          />
          <p className="cat-pic-label">Josie</p>
        </div>
        <div>
          <Image
            src="/images/dorian_001_fullSize.webp"
            alt="Dorian"
            width={300}
            height={300}
            className="cat-image img-zoom"
          />
          <p className="cat-pic-label">Dorian</p>
        </div>
      </AnimDiv>
    </AnimPage>
  )
}
