"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function HeroText() {
  const words = ["GIS", "LiDAR", "Surveys", "Software Dev."];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-2 max-w-2xl text-left text-5xl leading-tight font-semibold tracking-tighter font-primary text-para md:text-5xl dark:text-zinc-100"
      )}
      layout
    >
      <div className="">
        <h1> We are the One Stop Solution for all the </h1>
        <ContainerTextFlip words={words} textClassName={"text-4xl"} />{" "}
        <h1>Needs.</h1>
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}
