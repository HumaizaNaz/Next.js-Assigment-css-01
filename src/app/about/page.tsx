import Image from "next/image";
import  Button  from "@/components/Button";

export default function about() {
  return (
    <div className="digital-loans">
    <div className="content-wrapper1">
      <div className="content-container1">
        <div className="text-section">
          <h1>Empowering the Future Through Education</h1>
          <p>
          Our institute is dedicated to providing top-quality education and
              skill development to shape future leaders and innovators. Join us
              on a journey of knowledge and growth.
          </p>
          <div className="alert-box">
            <Image
              className="alert-image"
              src="/finger-middle.webp"
              height={40}
              width={40}
              alt="hand-pic"
            />
            <span>Enroll now to be a part of our next session! Contact us for more details.</span>
          </div>
          <Button className="contact-button" text="Get in touch" />
        </div>
        <div>
          <Image
            className="bank-image"
            src="/middle-hero.png"
            height={700}
            width={700}
            alt="Bank Pic"
            priority={true}
          />
        </div>
      </div>
    </div>
  </div>
  );
}
