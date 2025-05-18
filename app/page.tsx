"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { socials } from "./libs/socials";
import { motion } from "framer-motion";
import Link from "next/link";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="px-[2rem] lg:px-[4.3rem] h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.7, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="h-full mb-6 lg:mb-11 xl:mb-[70px]">
          <div className="flex flex-col xl:flex-row items-center justify-between">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none w-full">
              <span className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
                Software Developer
              </span>
              <h1 className="h1 mb-4 mt-3 text-3xl xl:text-6xl">
                Hello, I&apos;m <br />
                <span className="text-accent text-3xl xl:text-6xl">
                  Tisna Hidayat
                </span>
              </h1>
              <p className="xl:w-[90%] md:text-[18px] xl:text-xl mb-9 text-center mx-auto xl:mx-0 xl:text-left">
                I craft elegant, efficient, and reliable web applications that
                solve real problems and delight real users.
              </p>

              {/* button and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-5">
                <a
                  href="/docs/Curriculum Vitae - Tisna Hidayat.pdf"
                  download="CV Tisna Hidayat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    className="uppercase flex items-center gap-2 cursor-pointer duration-500 ease-in-out hover:transition-all"
                  >
                    <span>Donwload CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="xl:mb-0 mb-8 flex items-center gap-4">
                  {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        href={social.path}
                        key={index}
                        className="hover:text-primary hover:bg-accent-hover cursor-pointer border border-accent rounded-full p-2 text-base text-accent duration-500 ease-in-out hover:transition-all"
                      >
                        <Icon className="h-7 w-7" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none my-14 xl:my-0">
              <Photo />
            </div>
          </div>
        </div>
        {/* Stats */}
        <Stats />
      </motion.div>
    </section>
  );
};

export default Home;
