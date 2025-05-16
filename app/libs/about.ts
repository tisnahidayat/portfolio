"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaBootstrap,
  FaPhp,
  FaLaravel,
  FaCompass,
  FaGraduationCap,
  FaVuejs,
  FaCode,
  FaRobot,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiSelenium,
  SiVitest,
  SiTypescript,
  SiPython,
  SiVite,
  SiPostgresql,
} from "react-icons/si";
import type { IconType } from "react-icons";

type About = {
  title: string;
  description: string;
  icon: IconType;
  info: {
    fieldName: string;
    fieldValue: string;
  }[];
};

type Experience = {
  title: string;
  description: string;
  icon: IconType;
  items: {
    company: string;
    position: string;
    descJob: string;
    duration: string;
  }[];
};

type Education = {
  title: string;
  description: string;
  icon: IconType;
  items: {
    school: string;
    degree: string;
    duration: string;
  }[];
};

type Skills = {
  title: string;
  description: string;
  iconSkill: IconType;
  skillList: {
    name: string;
    icon: IconType;
  }[];
};

export const about: About = {
  title: "About Me",
  icon: FaRobot,
  description:
    "I'm a passionate Software Developer with a strong interest in web and mobile development. I enjoy turning ideas into real applications with clean code, responsive design, and great user experience. Always eager to learn, collaborate, and solve meaningful problems through technology.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tisna Hidayat",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 823 9728 7915",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ years",
    },
    {
      fieldName: "Language",
      fieldValue: "Indonesia, English",
    },
    {
      fieldName: "Email",
      fieldValue: "tisna.hd@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian",
    },
  ],
};

export const experience: Experience = {
  icon: FaCompass,
  title: "My Experience",
  description:
    "I’ve built real-world skills through roles in tech organizations and companies—focusing on front-end development, clean UI, and responsive apps. These experiences sharpened my ability to solve problems and collaborate with teams using modern tools.",

  items: [
    {
      company: "PT. Bank Syariah Indonesia",
      position: "Frontend Developer",
      descJob:
        "Developed responsive web applications using React.js, ensuring smooth UX across devices. Integrated RESTful APIs and managed state with Jotai and Redux. Collaborated with backend teams to resolve integration issues. Ensured quality through unit and integration testing with Vitest and JUnit.",
      duration: "2024 - 2025",
    },
    {
      company: "PWM DIY.",
      position: "Frontend Developer",
      descJob:
        "Developed and maintained the Muhammadiyah Asset Management System using Laravel and Bootstrap. Built dynamic interfaces with Blade templates and ensured responsiveness. Conducted black-box testing to validate functionality and enhance user experience.",
      duration: "2023 - 2024",
    },
  ],
};

export const education: Education = {
  title: "My Education",
  description:
    "I’ve built a strong tech foundation through formal education and certified programs, combining university studies with practical training in web, mobile, and UI/UX development.",

  icon: FaGraduationCap,
  items: [
    {
      school: "Ahmad Dahlan University",
      degree: "Bachelor of Informatics",
      duration: "2020 - 2024",
    },
    {
      school: "Informatics Laboratory",
      degree: "Certified Assistant Lecturer",
      duration: "2022 - 2024",
    },
    {
      school: "IDCamp by Indosat",
      degree: "Frontend Developer",
      duration: "2024",
    },
    {
      school: "Informatics Student Association",
      degree: "Leader",
      duration: "2022-2023",
    },
    {
      school: "Bangkit Academy led by Google, GoTo, and Traveloka",
      degree: "Mobile Developer",
      duration: "2023",
    },
    {
      school: "Digital Talent Scholarship by Komdigi",
      degree: "Junior Web Developer",
      duration: "2023",
    },
    {
      school: "Coding Studio",
      degree: "Junior Web Developer",
      duration: "2022",
    },
    {
      school: "Informatics Student Association",
      degree: "Public Relations",
      duration: "2021-2022",
    },
  ],
};

export const skills: Skills = {
  title: "My Skills",
  iconSkill: FaCode,
  description:
    "I bring a unique blend of technical expertise and a deep passion for problem-solving, allowing me to excel in a wide range of projects and challenges.",
  skillList: [
    {
      name: "HTML 5",
      icon: FaHtml5,
    },
    {
      name: "CSS 3",
      icon: FaCss3,
    },
    {
      name: "JavaScript",
      icon: FaJs,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Vue",
      icon: FaVuejs,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
    },
    {
      name: "Vite",
      icon: SiVite,
    },
    {
      name: "Git",
      icon: FaGitAlt,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
    },
    {
      name: "PHP",
      icon: FaPhp,
    },
    {
      name: "Laravel",
      icon: FaLaravel,
    },
    {
      name: "Selenium",
      icon: SiSelenium,
    },
    {
      name: "Vitest",
      icon: SiVitest,
    },
    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "Figma",
      icon: FaFigma,
    },
  ],
};
