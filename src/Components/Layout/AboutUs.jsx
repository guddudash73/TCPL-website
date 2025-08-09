import React from "react";
import aboutImage from "../../assets/aboutImage.jpg";

const AboutUs = () => {
  return (
    <section id="about" className="h-screen w-full">
      <div className="w-full h-full pt-20  ab-container flex flex-col items-center">
        <div>
          <h1 className="text-4xl font-primary font-semibold text-para pl-0.5">
            About Us
          </h1>
          <div className="h-[4px] rounded-full w-[7rem] bg-main"></div>
        </div>
        <div className="flex md:flex-row flex-col w-full items-center justify-center ">
          <div className="w-[40rem] h-90 flex items-center">
            <img src={aboutImage} alt="about image" className="h-90" />
          </div>
          <div className="righttext pt-5 flex flex-col gap-3 h-90 w-90 justify-center">
            <p className="text-main font-primary font-semibold">
              We handle everything for you!
            </p>
            <p className="text-para font-primary leading-7.5">
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
