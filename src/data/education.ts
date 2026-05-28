export interface EducationItem {
  school: string;
  field?: string;
  from: string;
  to: string;
  description?: string;
}

export const education: EducationItem[] = [
  {
    school: "Uczelnia (uzupełnij)",
    field: "Kierunek / specjalizacja",
    from: "2023",
    to: "obecnie",
    description: "Krótki opis (opcjonalnie).",
  },
  {
    school: "Szkoła średnia (uzupełnij)",
    field: "Profil",
    from: "2019",
    to: "2023",
  },
];
