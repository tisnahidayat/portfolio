"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { education, experience, skills, about } from "../libs/about";

const Resume = () => {
  const Experience = experience.icon;
  const Education = education.icon;
  const Skills = skills.iconSkill;
  const About = about.icon;

  return (
    <section className="px-[3rem]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.7, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-8 xl:py-0 mb-8"
      >
        <div className="md:px-12 w-full">
          <Tabs
            defaultValue="experience"
            className="flex flex-col lg:flex-row gap-[60px] items-center lg:items-start"
          >
            <TabsList className="flex flex-col lg:max-w-[380px] w-full gap-6">
              <TabsTrigger value={"experience"}>Experience</TabsTrigger>
              <TabsTrigger value={"education"}>Education</TabsTrigger>
              <TabsTrigger value={"skills"}>Skills</TabsTrigger>
              <TabsTrigger value={"about"}>About</TabsTrigger>
            </TabsList>
            <div className="min-h-[80vh] w-full">
              {/* Experience */}
              <TabsContent className="w-full" value={"experience"}>
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold flex justify-center lg:justify-start items-center gap-3">
                    {experience.title}
                    <span className="hidden sm:block">
                      <Experience />
                    </span>
                  </h3>
                  <p className="text-white/60 text-[15px]">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[450px] md:h-[320px]">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[30px]">
                      {experience.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-5 px-3 flex flex-col gap-1 justify-center items-center lg:items-start"
                        >
                          <span className="text-accent font-semibold">
                            {item.duration}
                          </span>

                          <h3 className="text-xl max-w-[400px] min-h-[50px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            <p className="text-white/60 leading-5">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* Education */}
              <TabsContent className="w-full" value={"education"}>
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold flex justify-center lg:justify-start items-center gap-3">
                    {education.title}
                    <span className="hidden sm:block">
                      <Education />
                    </span>
                  </h3>
                  <p className="text-white/60 text-[15px]">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[450px] md:h-[320px]">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[30px]">
                      {education.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-5 px-3 flex flex-col gap-1 justify-center items-center lg:items-start"
                        >
                          <span className="text-accent font-semibold">
                            {item.duration}
                          </span>

                          <h3 className="text-xl max-w-[400px] min-h-[50px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            <p className="text-white/60 leading-5">
                              {item.school}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* Skills */}
              <TabsContent className="w-full" value={"skills"}>
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold flex justify-center lg:justify-start items-center gap-3">
                    {skills.title}
                    <span className="hidden sm:block">
                      <Skills />
                    </span>
                  </h3>
                  <p className="text-white/60 text-[15px]">
                    {skills.description}
                  </p>
                  <ScrollArea className="h-[450px] md:h-[320px]">
                    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4 xl:gap-[18px]">
                      {skills.skillList.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center cursor-pointer group">
                                  <Icon className="w-15 h-15 group-hover:text-accent transition-all duration-500 ease-in-out" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent className="w-full" value={"about"}>
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold flex justify-center lg:justify-start items-center gap-3">
                    {about.title}
                    <span className="hidden sm:block">
                      <About />
                    </span>
                  </h3>
                  <p className="text-white/60 text-[15px]">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-y-5 gap-x-5">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center lg:justify-start gap-2"
                        >
                          <span className="text-white/60 text-[15px] lg:text-md">
                            {item.fieldName}
                          </span>
                          <span className="text-[15px] lg:text-md">
                            {item.fieldValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
};
export default Resume;
