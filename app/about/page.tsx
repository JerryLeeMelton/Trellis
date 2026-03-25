import Image from "next/image"

export default function About() {
  return (
    <div className="">
      <section className="">
        <h1>About Me</h1>
        <div className="about-content-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur blanditiis optio esse maxime ad aut, consequatur
            quisquam autem rerum delectus. Natus, dolorum? Animi dolor sunt et
            ut recusandae! Animi, nesciunt? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Consequuntur blanditiis optio esse
            maxime ad aut, consequatur quisquam autem rerum delectus. Natus,
            dolorum? Animi dolor sunt et ut recusandae! Animi, nesciunt?
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
      </section>
    </div>
  )
}
