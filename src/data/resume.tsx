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
  ],
  projects: [
    {
      title: "Fun Trip",
      href: "https://funtrip-page.vercel.app/",
      dates: "May 2026 - present",
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
      title: "FunOps",
      href: "https://funops.vercel.app/",
      dates: "June 2026 - Present",
      active: true,
      description:
        "FunOps is a task management redefined with design professional, elegant workspace for managing your daily operations. Beautifully minimal, powerfully functional.",
      technologies: [
        "Next.js",
        "Typescript",
        "PLpgSQL",
        "Javascript",
        "TailwindCSS",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://funops.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/thefool2507/funops",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/thefool2507/funops/blob/main/funops.mp4?raw=true",
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
