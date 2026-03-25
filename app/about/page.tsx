import Image from "next/image"

export default function About() {
  return (
    <section className="">
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
      <div className="about-content-container">
        <h2>Cat Pics!</h2>
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
