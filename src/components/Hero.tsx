import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-heading">
          H.N. Institute
            <span className="hero-highlight">Learning</span>
          </h1>
          <p className="hero-subheading">
          Empowering future professionals with top-tier education and resources.
          </p>
          <p>Ready to join the H.N. Institute community?</p>
        </div>
        <div className="">
          <Image
            src="/middle-hero.png"
            width={400}
            height={400}
            alt="Hero image"
            priority={true}
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
