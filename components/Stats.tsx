"use client";

import CountUp from "react-countup";
import { stats } from "@/app/libs/stats";

const Stats = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-16">
      <div className="flex flex-wrap gap-6 lg:gap-20 xl:gap-28 max-w-[80vw] xl:w-max-none justify-center">
        {stats.map((stat, index) => {
          return (
            <div
              key={index}
              className="flex flex-1 gap-3 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={stat.number}
                duration={3}
                delay={2}
                className="text-5xl xl:text-6xl font-bold"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[100px]"
                } leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
