import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Fahreza Rizky Pradana",
  initials: "FR",
  url: "https://fahrezarizkypradana.dev",
  location: "Jember, East Java, Indonesia",
  locationLink: "https://www.google.com/maps/place/jember",
  description:
    "AI & Software Engineer passionate about building intelligent systems. Focused on Deep Learning, Vision-Language Models, and real-world AI applications.",
  summary:
    "AI and Software Engineer with over 3 years of experience in developing intelligent systems and scalable software solutions. Strong expertise in machine learning, deep learning, and AI-driven application development using Python, combined with solid backend engineering experience using Laravel, Express, and Flask. Currently pursuing a Bachelor of Computer Science at the University of Muhammadiyah Jember, majoring in AI and Software Technology, with an ongoing thesis on a Multimodal Skin Disease Diagnosis System using Vision–Language Models and Explainable AI. Open to remote and international opportunities.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "TypeScript", icon: Typescript },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Go", icon: Golang },
    { name: "Java", icon: Java },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rizkyfahreza937@gmail.com",
    tel: "+6289520124809",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/fahrezarizkypradana",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fahrezarizkypradana/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/fahrezarizkypradana",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@fahrezarizkypradana",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:rizkyfahreza937@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "University of Muhammadiyah Jember",
      href: "https://unmuhjember.ac.id",
      badges: ["Research", "Thesis"],
      location: "Jember, Indonesia",
      title: "AI Researcher – Academic Thesis",
      logoUrl: "/unmuhjember.png",
      start: "Nov 2025",
      end: "Present",
      description:
        "Developing a multimodal skin disease diagnosis system using Vision–Language Models (VLMs). Implemented deep learning pipelines for image and text feature fusion. Applied Explainable AI (XAI) techniques to improve model interpretability. Trained, evaluated, and optimized models using Python and deep learning frameworks.",
    },
    {
      company: "Braincore.id",
      href: "https://braincore.id",
      badges: ["AI", "Software"],
      location: "Remote",
      title: "AI / Software Engineer",
      logoUrl: "/braincore.png",
      start: "Mar 2025",
      end: "Jul 2025",
      description:
        "Completed a professional internship with an Excellent performance evaluation at PT. Algonacci Sobat Nusantara (Braincore.id). Contributed to AI and software development projects in a collaborative, production-level environment. Applied Python-based solutions to real-world technical problems across multiple projects.",
    },
  ],

  education: [
    {
      school: "University of Muhammadiyah Jember",
      href: "https://unmuhjember.ac.id",
      degree: "Bachelor of Computer Science – Major in AI and Software Technology",
      logoUrl: "/unmuhjember.png",
      start: "2022",
      end: "Present",
    },
  ],

  projects: [
    {
      title: "Multimodal Skin Disease Diagnosis System",
      href: "#",
      dates: "Nov 2025 - Present",
      active: true,
      description:
        "An AI-powered multimodal diagnostic system for skin diseases using Vision–Language Models (VLMs). The system fuses image and text features through deep learning pipelines and applies Explainable AI (XAI) techniques to improve interpretability and clinical trustworthiness.",
      technologies: [
        "Python",
        "Vision-Language Models",
        "Deep Learning",
        "Explainable AI (XAI)",
        "PyTorch",
        "Hugging Face",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI-Driven Software Solutions",
      href: "https://braincore.id",
      dates: "Mar 2025 - Jul 2025",
      active: true,
      description:
        "Contributed to multiple AI and software engineering projects during internship at Braincore.id (PT. Algonacci Sobat Nusantara). Built and deployed Python-based AI solutions in production-level environments, collaborating with cross-functional teams.",
      technologies: [
        "Python",
        "Machine Learning",
        "Flask",
        "REST API",
        "Data Preprocessing",
      ],
      links: [
        {
          type: "Website",
          href: "https://braincore.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [],
} as const;