type ProjectItem = {
  title: string;
  description: string;
  github?: string;
  sheet?: string;
  techStack: string[];
  demo?: string;
  status?: "completed" | "ongoing" | "future";
};

type Projects = {
  category: string;
  items: ProjectItem[];
}[];

export const projects: Projects = [
  {
    category: "Automation/Manual Testing",
    items: [
      {
        title: "Tokopedia Web",
        description:
          "Performed manual testing on Tokopedia web using test cases documented in spreadsheets. Executed functional, UI, and usability tests. Reported bugs and collaborated with developers for resolution.",
        sheet:
          "https://docs.google.com/spreadsheets/d/1TdKudb3kfk08KYqWcx-XdhnNi7NrH59s_On4Yyi1VRI/edit?usp=sharing",
        techStack: ["Google Sheets", "JIRA", "Chrome"],
        status: "completed",
      },
      {
        title: "Reqres.in API",
        description:
          "Developed automated API tests for reqres.in using Pytest and Requests. Covered user creation, login, and data retrieval with positive and negative test cases. Used Pytest fixtures and generated reports with pytest-html.",
        sheet:
          "https://docs.google.com/spreadsheets/d/13umEsC1BWfS72LtJcnqEYX4YKhJt39-ixkWkXJActgs/edit?usp=sharing",
        github: "https://github.com/tisnahidayat/pytest-automation-reqres",
        techStack: ["Python", "Pytest", "Postman", "Github Action"],
        demo: "https://www.youtube.com/@tisnahidayat15",
        status: "completed",
      },
      {
        title: "DummyJSON API",
        description:
          "Automated API testing on DummyJSON API using Postman and Newman. Covered key endpoints with positive & negative cases. Organized requests in Postman collections and ran tests via CLI using Newman.",
        sheet:
          "https://docs.google.com/spreadsheets/d/1mSofKcFRLveaFjXKY7L_iF_T47cAnZskbh_CpoQzCXA/edit?usp=sharing",
        github: "https://github.com/tisnahidayat/newman-automation-dummyjson",
        techStack: ["Javascript", "HTML", "Postman"],
        demo: "https://www.youtube.com/@tisnahidayat15",
        status: "completed",
      },
      {
        title: "OpenWeather API",
        description:
          "Automated API testing for OpenWeather API using Pytest and Requests. Covered current weather, forecast, and error handling scenarios. Used fixtures for config and generated test reports with pytest-html.",
        github: "https://github.com/tisnahidayat/openweatherapi-pytest",
        sheet:
          "https://docs.google.com/spreadsheets/d/13ZcFZv1915A_B0OnaghIX-OWlcmp0k57mpqDPTSgoiE/edit?gid=1650920338#gid=1650920338",
        techStack: ["Python", "Pytest", "Postman", "Github Action"],
        demo: "https://www.youtube.com/@tisnahidayat15",
        status: "completed",
      },
      {
        title: "Jobstreet",
        description:
          "A system that integrates Jobstreet data using Google Sheets for tracking, JIRA for task management, and Chrome extensions for workflow. Designed to streamline job listing reviews and improve the recruitment process.",
        sheet: "",
        techStack: ["Google Sheet", "JIRA", "Chrome"],
        status: "future",
      },
      {
        title: "Spotify",
        description:
          "A system that utilizes Spotify data integrated with Google Sheets and JIRA to track music trends, manage tasks, and support content planning for campaigns or user engagement initiatives.",
        sheet: "",
        techStack: ["Google Sheet", "JIRA", "Spotify"],
        status: "future",
      },
    ],
  },

  {
    category: "Fullstack",
    items: [
      {
        title: "Tourism Information System",
        description:
          "A web-based system to display tourist destinations, local culture, and public facilities in Karawang. It is specifically built to help both tourists and local residents access tourism info quickly and easily.",
        github: "https://github.com/tisnahidayat/tourism-information-system",
        techStack: ["Laravel", "Bootstrap", "Saas", "MySQL"],
        status: "completed",
      },
      {
        title: "Dashboard Ecommerce",
        description:
          "Built an interactive ecommerce dashboard while learning Next.js. Features include responsive UI, data visualization, and layout structure. Developed with TailwindCSS and PostgreSQL integration.",
        github: "https://github.com/tisnahidayat/nextjs-dashboard",
        techStack: ["Next.js", "TailwindCSS", "PostgreSQL"],
        demo: "https://dashboard-ecommerce-acne.vercel.app",
        status: "ongoing",
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        title: "Geographic Information System Indonesia",
        description:
          "Developed a web-based GIS app to visualize and explore Indonesia's regions using Leaflet and JSON data. Built with Next.js and TailwindCSS, enabling interactive map views and responsive UI.",
        github:
          "https://github.com/tisnahidayat/geographic-information-system-indonesia",
        techStack: ["Next.js", "TailwindCSS", "JSON", "Leaflet"],
        demo: "https://gis-indonesia.vercel.app",
        status: "ongoing",
      },
    ],
  },
  {
    category: "Android",
    items: [
      {
        title: "RiceBuddy App",
        description:
          "RiceBuddy is a mobile application designed to detect the health condition of rice plants based on visual imagery. The app utilizes a machine learning model trained by the AI team to classify the condition of the crops and delivers real-time detection results through a simple and user-friendly interface.",
        github: "https://github.com/C23-PS449",
        techStack: ["Kotlin", "Firebase", "Jetpack", "Room"],
        status: "completed",
      },
    ],
  },
];
