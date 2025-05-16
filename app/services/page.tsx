"use client";

import Link from "next/link";
import { services } from "../libs/services";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const Services = () => {
  return (
    <section className="px-[3rem] min-h-[80vh] flex flex-col justify-center py-8 xl:py-0 mb-8">
      <div className="md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <p
                    className="text-5xl font-extrabold text-transparent transition duration-500 group-hover:text-accent "
                    style={{
                      WebkitTextStroke: "1px white",
                    }}
                  >
                    {service.number}
                  </p>
                  <Link
                    href={service.path}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent flex items-center justify-center transition-all duraton-500 hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {service.title}
                </h2>
                {/* description */}
                <p>{service.description}</p>
                {/* border */}
                <div className="border-b border-white/80 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
