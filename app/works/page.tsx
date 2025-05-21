"use client";

import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { projects } from "../libs/projects";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  BsArrowUpRight,
  BsGithub,
  BsArrowRight,
  BsArrowLeft,
} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Swiper as SwiperType } from "swiper/types";

const Works = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const currentProject = projects[projectIndex];
  const currentItem = currentProject.items[activeIndex];

  const handleCategoryChange = (index: number) => {
    setProjectIndex(index);
    setActiveIndex(0);
    swiperRef.current?.slideTo(0);
  };

  return (
    <section className="px-[3rem]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.7, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-8 xl:py-0 mb-8"
      >
        <div className="md:px-12">
          <div className="flex flex-col lg:flex-row lg:gap-[30px]">
            {/* Kiri: Info project */}
            <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
              <div>
                {/* Project category */}
                <div className="flex items-center gap-2 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <h2 className="text-lg font-semibold leading-none text-accent group-hover:text-accent transition-all duration-500">
                    {currentProject.category} Project
                  </h2>
                </div>
                {/* Outline number */}
                <div
                  className="text-6xl leading-relaxed font-extrabold text-transparent flex items-center gap-5"
                  style={{
                    WebkitTextStroke: "2px white",
                  }}
                >
                  {currentProject.num}.{activeIndex + 1}
                  {/* Category Control Buttons */}
                  <div className="flex gap-2 mb-4">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[30px] h-[30px] rounded-full bg-white/5 justify-center items-center flex group cursor-pointer">
                          <BsArrowLeft
                            className="text-lg text-white group-hover:text-accent transition-all duration-500"
                            onClick={() => {
                              const newIndex =
                                (projectIndex - 1 + projects.length) %
                                projects.length;
                              handleCategoryChange(newIndex);
                            }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Previous Category</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[30px] h-[30px] rounded-full bg-white/5 justify-center items-center flex group cursor-pointer">
                          <BsArrowRight
                            className="text-lg text-white group-hover:text-accent transition-all duration-500"
                            onClick={() => {
                              const newIndex =
                                (projectIndex + 1) % projects.length;
                              handleCategoryChange(newIndex);
                            }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Next Category</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-3xl font-bold">{currentItem.title}</h3>
                <ScrollArea className="h-[150px] my-2">
                  <p className="text-white/60">{currentItem.description}</p>
                </ScrollArea>
                {/* Tech Stack */}
                <ul className="flex gap-2">
                  {currentItem.techStack.map((tech, i) => {
                    return (
                      <li key={i} className="text-accent text-md">
                        {tech}
                        {i !== currentItem.techStack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-white/20 mb-4"></div>

                {/* Links */}
                <div className="flex gap-4">
                  <Link href={currentItem.demo} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 justify-center items-center flex group cursor-pointer">
                          <BsArrowUpRight className="text-xl text-white group-hover:text-accent transition-all duration-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Demo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={currentItem.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 justify-center items-center flex group cursor-pointer">
                          <BsGithub className="text-xl text-white group-hover:text-accent transition-all duration-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>

            {/* Kanan: Swiper */}
            <div className="w-full lg:w-[50%]">
              <Swiper
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={30}
                slidesPerView={1}
              >
                {currentProject.items.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="relative h-[450px] group flex justify-center items-center bg-pink-50/20">
                        <div className="relative w-full h-full">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <p className="text-center xl:mb-0 mb-14">Swipe</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
