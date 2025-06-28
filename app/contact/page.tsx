"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { info } from "../libs/info";

const Contact = () => {
  return (
    <div className="px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.7, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:h-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-accent text-4xl">
                  Let&apos;s work together
                </h3>
                <p className="text-white/60">
                  I’m always open to exciting collaborations and new challenges.
                  Feel free to reach out — let’s build something great together!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="firstname" placeholder="First Name" />
                  <Input type="lastname" placeholder="Last Name" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="phone" placeholder="Phone Number" />
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="1">Mobile Development</SelectItem>
                      <SelectItem value="2">Web Development</SelectItem>
                      <SelectItem value="3">Testing Automation</SelectItem>
                      <SelectItem value="4">UI/UX Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here"
                />
                <Button type="submit" className="max-w-40">
                  Send Messsage
                </Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul>
                {info.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-6 mb-6 last:mb-0"
                    >
                      <div className="w-12 h-12 xl:w-[52px] xl:h-[52px] text-accent rounded-md bg-[#27272c] flex items-center justify-center">
                        <Icon className="text-accent text-[28px]" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold">{item.title}</h4>
                        <p className="text-white/60">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
