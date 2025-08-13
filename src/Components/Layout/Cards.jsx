import React from "react";
import cardImage from "../../assets/what-we-do.webp";
import Card from "../ui/Card";
const Cards = () => {
  return (
    <div
      id="cards"
      className="w-full h-auto md:h-screen md:pt-20 overflow-hidden pt-20"
    >
      <div className="ab-container flex justify-center items-center h-full">
        <div className=" grid grid-cols-1 md:grid-cols-3 w-full gap-7">
          <article className="relative h-[28rem] rounded-xl overflow-hidden text-white p-6">
            <img
              src={cardImage}
              alt="vector Earth"
              className="absolute object-cover inset-0 z-10 w-full h-full"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 max-w-prose flex flex-col justify-center items-center pt-4">
              <h2 className="text-4xl md:text-4xl font-semibold tracking-tight text-center">
                What we do <span className="text-2nd font-bold">?</span>
              </h2>
              <p className="mt-6 text-md leading-6 text-center">
                We deliver expert services worldwide, driven by research,
                technical expertise, innovation, and a dedicated professional
                team. Our specialties include GIS software solutions, CAD and
                drafting, IT infrastructure, surveillance, urban planning, and
                engineering design—offering precise, high‑quality, and timely
                solutions.
              </p>
            </div>
          </article>

          <div className="w-full grid auto-rows-[5.7rem] text-white gap-7">
            <Card className="bg-2nd row-span-2">
              <h2 className="text-2xl md:text-xl font-semibold tracking-tight text-center">
                Drone & DGPS Survey
              </h2>
              <p className="mt-2 text-sm leading-5 text-center">
                Precision drone and DGPS surveys for accurate mapping and site
                analysis. Offering high-resolution imagery solutions to enhance
                project planning and decision-making.
              </p>
            </Card>

            <Card className="bg-[#D9D9D9] row-span-2 text-para">
              <h2 className="text-2xl md:text-xl font-semibold tracking-tight text-center">
                More than 100+ happy clients
              </h2>
              <p className="mt-2 text-sm leading-5 text-center">
                We have 100+ happy clients to whom we have sucessfully delivered
                our softwares and services accross the globe
              </p>
            </Card>
          </div>

          <div className="w-full flex flex-col text-white gap-7 md:h-auto h-[40rem]">
            <Card className="bg-main h-[30%] ">
              <h2 className="text-2xl md:text-xl font-semibold tracking-tight text-center">
                Over 10+ Years Experience
              </h2>
              <p className="mt-1 text-sm leading-4 text-center">
                We have 10+ years of proven track record in the GIS services,
                LiDAR and Software developement industry
              </p>
            </Card>

            <Card className="bg-[#2D74A7] h-[70%]">
              <h2 className="text-2xl md:text-xl font-semibold tracking-tight text-center">
                More than 100+ happy clients
              </h2>
              <p className="mt-2 text-sm leading-5 text-center">
                We have 100+ happy clients to whom we have sucessfully delivered
                our softwares and services accross the globe
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
