export interface Interest {
  icon: string;
  name: string;
  description: string;
}

export const interests: Interest[] = [
  {
    icon: "▲",
    name: "Web dev",
    description: "Astro, TypeScript, projektowanie szybkich stron.",
  },
  {
    icon: "▮",
    name: "Linux & CLI",
    description: "Terminal, skrypty, automatyzacja codziennej pracy.",
  },
  {
    icon: "♪",
    name: "Muzyka",
    description: "Słucham szeroko, czasem coś nagrywam.",
  },
  {
    icon: "❖",
    name: "Retro computing",
    description: "Stary sprzęt, demoscene, klimat wczesnego internetu.",
  },
];
