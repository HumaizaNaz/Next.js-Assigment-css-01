"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  title: string;
  content: string;
};

const accordionItems: AccordionItem[] = [
  {
    title: "Admissions",
    content:
      "For inquiries about our programs, admission requirements, and the application process, please contact our Admissions Office.",
  },
  {
    title: "Student Support",
    content:
    "Need assistance with student services, counseling, or resources? Our Student Support team is here to help!",
  },
  {
    title: "Faculty & Staff",
    content:
    "For information on faculty, staff, or career opportunities, feel free to reach out to our HR department.",
  },
  {
    title: "General Inquiries",
    content:
    "For general questions, please contact us, and we will be happy to assist you.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  console.log(openIndex);

  return (

<div className="contact-section">
  <div className="contact-wrapper">
    <div className="content-container">
      <div className="contact-info">
        <div>
          <div className="contact-header">
            <Image
              src="/envelope-middle.webp"
              height={100}
              width={100}
              alt="envelop"
              className="contact-icon"
            />
            <span className="contact-title">Feel free to contact</span>
          </div>
          <div>
            <p>
            Have questions or need more information? Let us know how we can help, and we’ll get back to you shortly.
            </p>
          </div>
          <div className="address-section">
            <h2 className="address-title">Our Address</h2>
            <p>Our Institute Address, City, Postal Code Brookfield Place, 10 Carrington St, Sydney NSW 2000</p>
          </div>
        </div>

        <div>
          <Image
            src="/ques-middle.webp"
            height={400}
            width={400}
            alt="question image"
            className="question-image"
          />
        </div>
      </div>

      <div className="accordion-container">
        {accordionItems.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-button"
              onClick={() => toggleAccordion(index)}
            >
              <span className="accordion-title">{item.title}</span>
              <ChevronDown
                className={`accordion-icon ${
                  openIndex === index ? "rotated" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div
                id={`accordion-content-${index}`}
                className="accordion-content"
                role="region"
                aria-labelledby={`accordion-header-${index}`}
              >
                <p className="accordion-text">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
}
