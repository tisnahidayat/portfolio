import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { socials } from "./libs/socials";
import Link from "next/link";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="px-[4.3rem] h-full">
      <div className="h-full mb-6 lg:mb-11 xl:mb-[70px]">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-2xl md:text-3xl">Software Developer</span>
            <h1 className="h1 mb-4 mt-3">
              Hello, I&apos;m <br />
              <span className="text-accent">Tisna Hidayat</span>
            </h1>
            <p className="max-w-[500px] md:text-[18px] mb-9">
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
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* Stats */}
      <Stats />
    </section>
  );
};

export default Home;
