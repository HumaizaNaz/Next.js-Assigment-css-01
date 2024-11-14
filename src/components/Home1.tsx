import Image from "next/image";

export default function Home2() {
  return (
    <section className="section">
  <div>
    <div className="text-center">
      <h1 className="heading">Latest Courses</h1>
      <p className="subheading">
      Explore the latest courses designed to enhance your skills and knowledge. Stay up-to-date with industry trends, learn new techniques, and gain expertise in your field. Our carefully curated courses are tailored to help you succeed and grow, no matter your level of experience.
      </p>
    </div>
  </div>
  <div className="image-container">
  <div className="image-main">
      <Image
        src="/middle-app.jpg"
        width={1000}
        height={1500}
        alt="middle"
        priority={true}
        className="image"
      />
    </div>

    <div className="image-main image-overlay-1">
      <Image
        src="/mobile-middle.png"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-2">
      <Image
        src="/course-01.jpg"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-3">
      <Image
        src="/course-03.jpg"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-4">
      <Image
        src="/course-05.jpg"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-5">
      <Image
        src="/course-06.jpg"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-6">
      <Image
        src="/course-02.jpg"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-7">
      <Image
        src="/course-04.jpg"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>
  </div>
</section>

  )
}

