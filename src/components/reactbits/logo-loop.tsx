import { cn } from "@/lib/utils";
import React from "react";

interface Skill {
  name: string;
  icon?: React.ComponentType<any>;
}

interface LogoLoopProps {
  skills: Skill[];
  className?: string;
}



const ICON_COLORS: Record<string, string> = {
  "JavaScript":  "#F7DF1E",
  "TypeScript":  "#3178C6",
  "React":       "#61DAFB",
  "Next.js":     "#ffffff",
  "Vue":         "#42B883",
  "HTML5":       "#E34F26",
  "CSS3":        "#1572B6",
  "Bootstrap":   "#7952B3",
  "PHP":         "#777BB4",
  "Laravel":     "#FF2D20",
  "Node.js":     "#339933",
  "Python":      "#3776AB",
  "Java":        "#ED8B00",
  "Go":          "#00ADD8",
  "Kotlin":      "#7F52FF",
  "Ruby":        "#CC342D",
  "MySQL":       "#4479A1",
  "PostgreSQL":  "#336791",
  "MongoDB":     "#47A248",
  "Docker":      "#2496ED",
  "Kubernetes":  "#326CE5",
  "Git":         "#F05032",
  "GitHub":      "#ffffff",
  "Firebase":    "#FFCA28",
  "AWS":         "#FF9900",
  "Android":     "#3DDC84",
  "C++":         "#00599C",
  "Flutter":     "#02569B",
};

function LogoRow({ items, reverse = false, speed = 1 }: { items: Skill[]; reverse?: boolean; speed?: number }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        width: "max-content",
        animation: `${reverse ? "logo-loop-x-reverse" : "logo-loop-x"} ${speed}s linear infinite`,
      }}
    >
      {items.map((skill, i) => (
        <div
          key={i}
          title={skill.name}
          style={{
            width: "50px",
            height: "50px",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px",
            borderRadius: "12px",
            border: "1px solid hsl(var(--border))",
            background: "hsl(var(--background) / 0.8)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          {skill.icon && (
            <skill.icon
              style={{
                width: "100%",
                height: "100%",
                color: ICON_COLORS[skill.name] ?? "currentColor",
              } as React.CSSProperties}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function LogoLoop({ skills, className }: LogoLoopProps) {
  const items = [...skills, ...skills, ...skills];

  return (
    <div className={cn("w-full overflow-hidden flex flex-col gap-3", className)}>
      {/* Baris 1 — lambat banget */}
      <div
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          overflow: "hidden",
        }}
      >
        <LogoRow items={items} reverse={false} speed={60} />
      </div>

      {/* Baris 2 — agak cepet */}
      <div
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          overflow: "hidden",
        }}
      >
        <LogoRow items={[...items].reverse()} reverse={true} speed={50} />
      </div>

      {/* Baris 3 — lebih cepet */}
      <div
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          overflow: "hidden",
        }}
      >
        <LogoRow items={items} reverse={false} speed={40} />
      </div>
    </div>
  );
}