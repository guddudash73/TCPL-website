import React from "react";
import aboutImage from "../../assets/aboutImage.jpg";

const AboutUs = () => {
  return (
    <section id="about" className="h-screen w-full overflow-hidden">
      <div className="w-full h-full pt-20 ab-container flex flex-col items-center gap-10">
        {/* Heading */}
        <div>
          <h1 className="text-4xl font-primary font-semibold text-para pl-0.5">
            About Us
          </h1>
          <div className="h-[4px] rounded-full w-[7rem] bg-main"></div>
        </div>

        {/* Content - Grid Layout */}
        <div
          className="
            w-full 
            grid 
            grid-cols-1 md:grid-cols-3 
            items-center 
            md:gap-0
          "
        >
          {/* Image column (2 parts of the grid on md+) */}
          <div className="md:col-span-2 flex items-center md:justify-start justify-center w-full h-full">
            <img
              src={aboutImage}
              alt="about"
              loading="lazy"
              className="w-[90%] h-[90%] object-contain object-center rounded-none"
            />
          </div>

          {/* Text column (1 part of the grid on md+) */}
          <div className="righttext pt-4 flex flex-col gap-2 w-full h-full justify-center items-center md:items-start">
            <p className="text-main font-primary font-semibold">
              We handle everything for you!
            </p>
            <p className="text-para font-primary leading-6 md:leading-7.5 text-center md:text-left px-5 md:px-0 md:max-w-70">
              Our expert team delivers precise, high-resolution mapping and
              geospatial solutions to support various industries. Committed to
              innovation and accuracy, we help clients achieve superior project
              outcomes through advanced technology and unparalleled expertise.
            </p>
            <a
              href="#"
              className="text-para font-primary font-semibold underline hover:text-main w-fit"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
