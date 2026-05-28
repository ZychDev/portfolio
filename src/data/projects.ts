export interface Project {
  id: string;
  num: string;
  title: string;
  description: string;
  year: number;
  tech: string[];
  url?: string;
  repo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    num: "01",
    title: "Portfolio + blog",
    description:
      "Ta strona. Statyczne Astro, Tailwind v4, treść w MDX, hosting Cloudflare Pages.",
    year: 2026,
    tech: ["Astro", "Tailwind", "TypeScript", "MDX"],
    repo: "https://github.com/ZychDev/portfolio",
  },
  {
    id: "projekt-02",
    num: "02",
    title: "Nazwa projektu 02",
    description:
      "Krótki opis — czym jest, jaki problem rozwiązuje, czego się przy nim nauczyłem.",
    year: 2025,
    tech: ["TypeScript", "Node"],
  },
  {
    id: "projekt-03",
    num: "03",
    title: "Nazwa projektu 03",
    description:
      "Krótki opis — czym jest, jaki problem rozwiązuje, czego się przy nim nauczyłem.",
    year: 2024,
    tech: ["React", "Postgres"],
  },
];
