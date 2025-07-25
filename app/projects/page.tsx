"use client";

import { motion } from "framer-motion";
import React from "react";
import { projects } from "../libs/projects";

import {
  BsGithub,
  BsFileEarmarkSpreadsheet,
  BsCollectionPlayFill,
} from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const getStatusStyle = (status?: string) => {
  switch (status) {
    case "completed":
      return "bg-green-500";
    case "ongoing":
      return "bg-yellow-400";
    case "future":
      return "bg-gray-400";
    default:
      return "bg-gray-300";
  }
};

const Works = () => {
  return (
    <section className="px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.7, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-8 xl:py-0 mb-8"
      >
        <div className="md:px-12">
          <div className="space-y-12">
            {projects.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-accent dark:text-white/60">
                  {section.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {section.items.map((project, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="bg-[#232329] dark:bg-[#1f1f23] border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow cursor-pointer"
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-semibold truncate">
                            {project.title}
                          </h3>
                          {project.status && (
                            <div className="flex items-center gap-1">
                              <span
                                className={`w-2 h-2 rounded-full animate-pulse ${getStatusStyle(
                                  project.status
                                )}`}
                              />
                              <span className="text-xs capitalize text-gray-600 dark:text-gray-400">
                                {project.status.replace("-", " ")}
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-white/60 dark:text-zinc-300 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs font-semibold text-[#27272c] px-2 py-1 bg-white/60 dark:bg-zinc-800 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 items-center">
                          <TooltipProvider>
                            {project.github && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <BsGithub className="md:text-xl text-2xl hover:text-accent dark:hover:text-white transition" />
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                  GitHub
                                </TooltipContent>
                              </Tooltip>
                            )}

                            {project.sheet && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link
                                    href={project.sheet}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <BsFileEarmarkSpreadsheet className="md:text-xl text-2xl hover:text-accent transition" />
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                  Test Case Sheet
                                </TooltipContent>
                              </Tooltip>
                            )}
                            {project.demo && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <BsCollectionPlayFill className="md:text-xl text-2xl hover:text-accent dark:hover:text-white transition" />
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent side="top">Demo</TooltipContent>
                              </Tooltip>
                            )}
                          </TooltipProvider>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
