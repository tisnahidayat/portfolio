"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaLaravel,
  FaCompass,
  FaGraduationCap,
  FaCode,
  FaRobot,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMysql,
  SiSelenium,
  SiVitest,
  SiPython,
  SiPostgresql,
  SiJest,
  SiCypress,
  SiPostman,
  SiSwagger,
  SiAppium,
  SiPytest,
  SiChai,
  SiCucumber,
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

type SkillItem = {
  name: string;
  icon: IconType;
};

type Skills = {
  title: string;
  description: string;
  iconSkill: IconType;
  skillList: SkillItem[];
};

export const about: About = {
  title: "About Me",
  icon: FaRobot,
  description:
    "I'm a passionate Software Quality Assurance enthusiast with a strong interest in ensuring software reliability across web and mobile platforms. I enjoy turning complex requirements into well-structured test plans and uncovering issues before users do. Always eager to learn, collaborate, and contribute to delivering high-quality, user-ready applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tisna Hidayat",
    },
    {
      fieldName: "Email",
      fieldValue: "tisnahidayat1993@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 823 9728 7915",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Indonesia, English",
    },
    {
      fieldName: "Location",
      fieldValue: "Karawang, Jawa Barat",
    },
  ],
};

export const experience: Experience = {
  icon: FaCompass,
  title: "My Experience",
  description:
    "I’ve built real-world skills in tech organizations—focusing on software QA, test planning, and automation. These experiences improved my ability to find bugs, ensure reliability, and work with teams using modern QA tools.",

  items: [
    {
      company: "PT. Bank Syariah Indonesia",
      position: "Software Quality Assurance",
      descJob:
        "Performed functional and regression testing on web and mobile applications to ensure system reliability. Created and executed test cases, documented results, and collaborated with developers and designers to identify and verify bugs. Also developed automated test scripts to increase efficiency and reduce manual workload.",
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
    "I’ve built a strong tech foundation through formal education and certified programs, combining university studies with practical training in web, mobile, tetsing, and UI/UX development.",

  icon: FaGraduationCap,
  items: [
    {
      school: "MySkill",
      degree: "Software Quality Assurance",
      duration: "2025",
    },
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
      name: "React",
      icon: FaReact,
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
      name: "Laravel",
      icon: FaLaravel,
    },
    {
      name: "Java",
      icon: FaJava,
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
      name: "Robot Framework",
      icon: FaRobot,
    },
    {
      name: "Jest",
      icon: SiJest,
    },
    {
      name: "Cypress",
      icon: SiCypress,
    },
    {
      name: "Postman",
      icon: SiPostman,
    },
    {
      name: "Swagger",
      icon: SiSwagger,
    },
    {
      name: "Appium",
      icon: SiAppium,
    },
    {
      name: "Pytest",
      icon: SiPytest,
    },
    {
      name: "Chai",
      icon: SiChai,
    },
    {
      name: "Gherkin",
      icon: SiCucumber,
    },
  ],
};
