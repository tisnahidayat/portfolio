type ProjectItem = {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  techStack: string[];
};

type Projects = {
  num: string;
  category: string;
  items: ProjectItem[];
}[];

export const projects: Projects = [
  {
    num: "01",
    category: "Frontend",
    items: [
      {
        title: "Mitra Management Information System",
        description:
          "The Partner Management System (MMS) application is an application initiated to carry out the process of submitting new partners who will collaborate with BSI for BSI Payment Institution (BPI) products or products managed by the Digital Strategy and Product Group (DPG) work unit.",
        image: "/img/mms.png",
        github: "https://github.com/TisnaHidayat/fylo-landing-page",
        demo: "https://tisnahidayat.github.io/fylo-landing-page/",
        techStack: ["ReactJS", "TailwindCSS"],
      },
    ],
  },
  {
    num: "02",
    category: "Fullstack",
    items: [
      {
        title: "Karawang Regency Tourism Information System",
        description:
          "This project is a web-based information system designed to present data about tourist destinations, local culture, and supporting facilities within Karawang Regency. The system aims to help tourists and locals easily access tourism-related information in a fast.",
        image: "/img/siparkar.png",
        github: "https://github.com/tisnahidayat/tourism-information-system",
        demo: "https://github.com/tisnahidayat/tourism-information-system",
        techStack: ["Laravel", "Bootstrap", "Saas", "MySQL"],
      },
      {
        title: "Dashboard Ecommerce",
        description:
          "Dashboard Web using Next.js This project is a dashboard application built with Next.js, a React framework that enables the creation of fast, scalable, and SEO-friendly web applications. The dashboard is designed to provide an interactive and user-friendly interface for monitoring and managing data.",
        image: "/img/acne.png",
        github: "https://github.com/tisnahidayat/nextjs-dashboard",
        demo: "https://dashboard-ecommerce-acne.vercel.app/",
        techStack: ["Next.js", "TailwindCSS", "PostgreSQL"],
      },
    ],
  },
  {
    num: "03",
    category: "Android",
    items: [
      {
        title: "RiceBuddy App",
        description:
          "RiceBuddy is a mobile application designed to detect the health condition of rice plants based on visual imagery. The app utilizes a machine learning model trained by the AI team to classify the condition of the crops and delivers real-time detection results through a simple and user-friendly interface.",
        image: "/img/project/blogr.png",
        github: "https://github.com/C23-PS449",
        demo: "https://github.com/C23-PS449",
        techStack: ["Kotlin", "XML", "Firebase", "Jetpack Compose", "Room"],
      },
    ],
  },
];
