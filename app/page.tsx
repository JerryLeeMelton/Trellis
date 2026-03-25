import FeaturedProjectCard from "@/components/cards/FeaturedProjectCard"
import LatestPostsCard from "@/components/cards/LatestPostsCard"
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
            <button>Resume</button>
          </div>
          <div>
            <button>GitHub</button>
          </div>
          <div>
            <button>LinkedIn</button>
          </div>
          <div>
            <a href="/about">More about me...</a>
          </div>
        </div>
      </section>
      <section className="skills-section-container">
        <div>Typescript</div>
        <div>HTML 5</div>
        <div>CSS</div>
        <div>Golang</div>
        <div>React</div>
        <div>Next.js</div>
        <div>PostgreSQL</div>
        <div>Docker</div>
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
