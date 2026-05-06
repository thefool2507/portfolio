import { Icons } from "@/components/icons";
import { HomeIcon, Instagram, NotebookIcon } from "lucide-react";

import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiPython, SiGo, SiPostgresql, SiDocker, SiKubernetes,
  SiCplusplus, SiJavascript, SiHtml5, SiCss,          
  SiInstagram, SiGit, SiGithub, SiFirebase, SiMysql, SiPhp,
  SiVuedotjs, SiLaravel, SiBootstrap,       
  SiKotlin, SiRuby, SiMongodb, SiAndroid,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa"; 

export const DATA = {
  name: "Fahreza Rizky",
  initials: "FR",
  url: "https://rezalnc.vercel.app",
  location: "Jember, East Java, Indonesia",
  locationLink: "https://www.google.com/maps/place/jember",
  description:
    "I am an AI Software Engineer who enjoys building things that not only look cool, but also solve people’s problems.",
  summary:
    "I started by wondering how apps work, and now I spend my time creating them, breaking them, and making them better. Some of the things I’ve built include a [simple productivity app](/#education) and a [web based tool for managing daily tasks](/#education). I enjoy mixing clean design with solid functionality, building products that are both cool and useful. Right now, I’m focused on growing my skills and creating projects that make a real impact. If you’re curious, feel free to explore my [projects](/#education) or check my code on [GitHub.](/#education)",
  avatarUrl: "/me.png",

  skills: [
  { name: "JavaScript",  icon: SiJavascript },
  { name: "TypeScript",  icon: SiTypescript },
  { name: "React",       icon: SiReact },
  { name: "Next.js",     icon: SiNextdotjs },
  { name: "Vue",         icon: SiVuedotjs },
  { name: "HTML5",       icon: SiHtml5 },
  { name: "CSS3",        icon: SiCss },
  { name: "Bootstrap",   icon: SiBootstrap },
  { name: "PHP",         icon: SiPhp },
  { name: "Laravel",     icon: SiLaravel },
  { name: "Node.js",     icon: SiNodedotjs },
  { name: "Python",      icon: SiPython },
  { name: "Java",        icon: FaJava },
  { name: "Go",          icon: SiGo },
  { name: "Kotlin",      icon: SiKotlin },
  { name: "Ruby",        icon: SiRuby },
  { name: "MySQL",       icon: SiMysql },
  { name: "PostgreSQL",  icon: SiPostgresql },
  { name: "MongoDB",     icon: SiMongodb },
  { name: "Docker",      icon: SiDocker },
  { name: "Kubernetes",  icon: SiKubernetes },
  { name: "Git",         icon: SiGit },
  { name: "GitHub",      icon: SiGithub },
  { name: "Firebase",    icon: SiFirebase },
  { name: "AWS",         icon: FaAws },
  { name: "Android",     icon: SiAndroid },
],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "rizkyfahreza@gmail.com",
    tel: "+62 895-2012-4809",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/thefool2507",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fahrezarizkypradana",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/reza_lnc",
        icon: SiInstagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://rizkyfahreza@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Braincore.id",
      href: "https://braincore.id",
      badges: [],
      location: "Remote",
      title: "software developer",
      logoUrl: "/braincore.png",
      start: "Mar 2025",
      end: "Jul 2025",
      description:
        "Developed a web-based Point of Sale (POS) system as part of an internship program. Responsible for designing and implementing system features to support inventory management, sales transactions, and operational workflows.",
    },
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "University of Muhammadiyah Jember",
      href: "https://unmuhjember.ac.id/",
      degree: "Bachelor of Computer Science",
      logoUrl: "/unmuhjember.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Muhammadiyah Senior High School 3 Jember",
      href: "https://smamuh3jbr.sch.id/",
      degree: "High School Diploma in Science",
      logoUrl: "/sma3muh.png",
      start: "2019",
      end: "2022",
    },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Fun Trip",
      href: "https://funtrip-page.vercel.app/",
      dates: "May 2026",
      active: true,
      description:
        "A modern travel landing page built with Next.js 16, Tailwind CSS v4, and TypeScript.",
      technologies: [
        "Next.js",
        "Typescript",
        "Lucide React",
        "Next/Image",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://funtrip-page.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/thefool2507/FunTrip_LandingPage/blob/main/FunTrip.mp4?raw=true",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],

} as const;
