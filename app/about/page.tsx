import SVGIcon from "@/components/svg/SVGIcon"
import Image from "next/image"

export default function About() {
  return (
    <section className="main-content-container">
      <h1>About Me</h1>
      <div className="about-content-container">
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
            src="/images/jerry_hero.jpg"
            alt="Picture of Jerry Lee Melton"
            width={300}
            height={300}
            className="intro-image"
          />
        </div>
      </div>
      <div className="about-social-links-container">
        <a href="/resume" target="_blank" rel="noopener noreferrer">
          <SVGIcon name="file" size={19} />
          Resume
        </a>
        <span>|</span>
        <a
          href="https://github.com/jerrymelton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SVGIcon name="github" size={25} />
          Github
        </a>
        <span>|</span>
        <a
          href="https://linkedin.com/in/jerrymelton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SVGIcon name="linkedin" size={22} />
          LinkedIn
        </a>
        <span>|</span>
        <a href="/about">
          More about me <SVGIcon name="arrowRight" size={16} />
        </a>
      </div>

      <div>
        <h2>Cat Pics!</h2>
      </div>
      <div className="about-content-container">
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
      </div>
    </section>
  )
}
