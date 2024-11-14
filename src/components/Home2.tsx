import Image from "next/image"

export default function Home3() {
  return (
    <section className="section-borrowers">
      <div>
        <h1 className="section-title">What students love about Our Institute</h1>

        <div className="grid-container">
          <div className="grid-item">
            <Image
              src="/rocket-middle.webp"  // Replace with the appropriate image path
              height={150}
              width={150}
              alt="Boy sitting on rocket"
              className="images"
            />
            <h2 className="item-title">Launch your career with us</h2>
            <p className="item-description">
              Our institute empowers students to reach new heights in their education, providing the tools to excel in the digital world.
            </p>
          </div>

          <div className="grid-item">
            <Image
              src="/hand-middle.webp"  // Replace with the appropriate image path
              height={150}
              width={150}
              alt="Hand touch"
              className="images"
            />
            <h2 className="item-title">Interactive learning experience</h2>
            <p className="item-description">
              We offer hands-on learning experiences, ensuring that students understand both theory and practical applications in tech and IT.
            </p>
          </div>

          <div className="grid-item">
            <Image
              src="/security-middle.webp"  // Replace with the appropriate image path
              height={150}
              width={150}
              alt="File locker"
              className="images"
            />
            <h2 className="item-title">Secure and organized</h2>
            <p className="item-description">
              With our well-organized digital tools and resources, your learning materials and progress are safely stored and easily accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
