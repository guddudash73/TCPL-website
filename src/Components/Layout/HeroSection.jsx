import React from "react";
import heroImg from "../../assets/heroImg.png";
import { HeroText } from "@/Components/ui/heroText";

const HeroSection = () => {
  return (
    <div>
      <section
        className={`relative w-full h-screen bg-[url('./assets/herobg.jpg')] bg-cover bg-center bg-no-repeat`}
      >
        <div className="h-full w-full pt-[4rem] ab-container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center h-full w-full">
            <div id="left" className=" flex flex-col">
              <HeroText></HeroText>
              <div className="bg-para h-[4px] w-[10rem] md:w-[8rem] rounded-full "></div>
              <p className="text-para font-primary md:pt-4 pt-6">
                At Tecnoglance Consulting Private Limited, we deliver
                precision-driven geospatial intelligence, advanced LiDAR
                mapping, and end-to-end software solutions — all under one roof
              </p>
            </div>

            <div className="w-auto h-auto flex-grow absolute right-0 hidden md:block overflow-hidden">
              <img src={heroImg} alt="" className="md:w-120 lg:w-150" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
