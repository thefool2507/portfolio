"use client";

import { useEffect, useState } from "react";
import { GitFork, Star, Github } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

const GITHUB_USERNAME = "thefool2507";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string | null;
}

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

// Warna level kontribusi
const LEVEL_COLORS = [
  "bg-muted border border-border",
  "bg-green-900",
  "bg-green-700",
  "bg-green-500",
  "bg-green-400",
];

function ContributionGraph({ username }: { username: string }) {
  const [weeks, setWeeks] = useState<ContributionDay[][]>([]);
  const [total, setTotal] = useState(0);
  const [tooltip, setTooltip] = useState<{ date: string; count: number } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Pakai github-contributions-api (public, no auth needed)
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => r.json())
      .then((data) => {
        setTotal(data.total?.lastYear ?? 0);

        const days: ContributionDay[] = data.contributions.map((d: any) => ({
          date: d.date,
          count: d.count,
          level: d.level,
        }));

        // Kelompokkan per minggu
        const grouped: ContributionDay[][] = [];
        let week: ContributionDay[] = [];
        days.forEach((day, i) => {
          week.push(day);
          if (week.length === 7 || i === days.length - 1) {
            grouped.push(week);
            week = [];
          }
        });
        setWeeks(grouped);
      })
      .catch(() => {});
  }, [username]);

  // Ambil nama bulan dari minggu
  const getMonthLabels = () => {
    const labels: { label: string; index: number }[] = [];
    let lastMonth = "";
    weeks.forEach((week, i) => {
      const month = new Date(week[0]?.date).toLocaleString("en", { month: "short" });
      if (month !== lastMonth) {
        labels.push({ label: month, index: i });
        lastMonth = month;
      }
    });
    return labels;
  };

return (
  <div
    className="relative overflow-hidden rounded-2xl p-4 w-full overflow-x-auto"
    style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.15)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)",
    }}
  >
    {/* Glossy sheen */}
    <div
      className="absolute inset-x-0 top-0 h-px rounded-t-2xl pointer-events-none"
      style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)" }}
    />

    <div className="flex items-center gap-2 mb-3">
      <Github className="size-5" />
      <span className="font-semibold text-sm">
        {total} activities in this period
      </span>
    </div>

    {/* Month labels */}
    <div className="relative">
      <div className="flex gap-0.75 mb-1 ml-8">
        {getMonthLabels().map(({ label, index }) => (
          <div
            key={index}
            className="text-[10px] text-muted-foreground absolute"
            style={{ left: `${32 + index * 11}px` }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Day labels + grid */}
      <div className="flex gap-0.75 mt-4">
        <div className="flex flex-col gap-0.75 mr-1">
          {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
            <div key={i} className="h-2.25 text-[9px] text-muted-foreground leading-none w-6 text-right">
              {d}
            </div>
          ))}
        </div>
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-0.75">
            {week.map((day, di) => (
              <div
                key={di}
                className={`w-2.25 h-2.25 rounded-[2px] cursor-pointer ${LEVEL_COLORS[day.level]}`}
                onMouseEnter={(e) => {
                  setTooltip({ date: day.date, count: day.count });
                  setTooltipPos({ x: e.clientX, y: e.clientY });
                }}
                onMouseLeave={() => setTooltip(null)}
                onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY })}
              />
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* Legend */}
    <div className="flex items-center justify-end gap-1 mt-2">
      <span className="text-[10px] text-muted-foreground">Less</span>
      {LEVEL_COLORS.map((c, i) => (
        <div key={i} className={`w-2.25 h-2.25 rounded-[2px] ${c}`} />
      ))}
      <span className="text-[10px] text-muted-foreground">More</span>
    </div>

    {/* Tooltip */}
    {tooltip && (
      <div
        className="fixed z-50 px-2 py-1 rounded-lg text-xs shadow-lg pointer-events-none"
        style={{
          left: tooltipPos.x + 12,
          top: tooltipPos.y - 30,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.9)",
        }}
      >
        <span className="font-medium">{tooltip.count} activities</span> on {tooltip.date}
      </div>
    )}
  </div>
);
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}
    >
      {/* Glossy sheen di atas */}
      <div
        className="absolute inset-x-0 top-0 h-px rounded-t-2xl"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
        }}
      />

      <div className="flex items-center gap-2">
        <Github className="size-4 shrink-0" style={{ color: "rgba(255,255,255,0.7)" }} />
        <span className="font-bold text-sm truncate" style={{ color: "rgba(255,255,255,0.9)" }}>
          {repo.name}
        </span>
      </div>

      {repo.description && (
        <p className="text-xs line-clamp-2 flex-1" style={{ color: "rgba(255,255,255,0.55)" }}>
          {repo.description}
        </p>
      )}

      <div className="flex items-center gap-3 mt-auto">
        {repo.language && (
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            {repo.language}
          </span>
        )}
        <div className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
          <Star className="size-3 text-yellow-400" />
          {repo.stargazers_count}
        </div>
        <div className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
          <GitFork className="size-3 text-orange-300" />
          {repo.forks_count}
        </div>
      </div>
    </a>
  );
}

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=public`
    )
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">My Repositories</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
      <ContributionGraph username={GITHUB_USERNAME} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}