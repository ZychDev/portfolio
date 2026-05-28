# Portfolio + blog

Statyczne portfolio + blog autorstwa Szymona Zycha.
Astro + Tailwind v4 + MDX, deploy na Cloudflare Pages.

## Stack

- **[Astro](https://astro.build/)** — static site generator, content collections
- **[Tailwind CSS v4](https://tailwindcss.com/)** — przez `@tailwindcss/vite`
- **[MDX](https://mdxjs.com/)** — komponenty w Markdownie
- **TypeScript** (strict)
- Fonty self-hostowane: `@fontsource/ibm-plex-mono`, `@fontsource/inter`
- Hosting: **[Cloudflare Pages](https://pages.cloudflare.com/)** (darmowy, build z GitHuba)

## Rozwój lokalny

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build do dist/
npm run preview  # podgląd produkcyjnego builda
```

Wymagane: Node 22.12+.

## Struktura

```
src/
├── components/          # SEO, Header, Footer, AsciiDivider
├── content/blog/        # wpisy (.md / .mdx)
├── content.config.ts    # schema kolekcji (zod)
├── data/                # site, projects, education, interests
├── layouts/Base.astro   # główny layout (z SEO, fontami, view transitions)
├── pages/               # routing: /, /o-mnie, /projekty, /blog, /blog/[slug], /404, /rss.xml
└── styles/global.css    # tokeny @theme, kursor, reveal, dot-grid
```

## Edycja treści

### Dodanie nowego wpisu na blogu

Stwórz plik `src/content/blog/moj-wpis.md` (lub `.mdx`):

```md
---
title: "Tytuł wpisu"
description: "Krótki opis do listy i meta tagów."
pubDate: 2026-04-01
tags: ["astro", "performance"]
draft: false
---

Treść w Markdownie.
```

Pola wymagane: `title`, `description`, `pubDate`. `draft: true` ukrywa wpis z listy.

### Dodanie projektu

Edytuj `src/data/projects.ts` — dodaj wpis do tablicy `projects`. Każdy projekt ma
`id`, `num`, `title`, `description`, `year`, `tech[]` oraz opcjonalnie `url`,
`repo`, `image`.

### Edukacja / Zainteresowania

Edytuj `src/data/education.ts` i `src/data/interests.ts`.

### Linki kontaktowe, domena

Edytuj `src/data/site.ts`. Tu zmieniasz: `url` (produkcyjna domena), `email`,
`github`, `linkedin`.

**Ważne**: Po wybraniu domeny zmień też `site:` w `astro.config.mjs` oraz adres
w `public/robots.txt` (linijka `Sitemap:`).

## Tokeny stylu

Wszystkie kolory i fonty są zdefiniowane w `src/styles/global.css` w bloku
`@theme`. Używaj klas Tailwind opartych na tych tokenach:

- kolory: `bg-bg`, `text-ink`, `text-mut`, `border-line`, `text-acc`,
  warianty dark: `dark:bg-bg-dark`, itp.
- fonty: `font-mono`, `font-sans`

**Nie hardkoduj hexów po komponentach** — zmień token w `global.css`,
zmiana propaguje się wszędzie.

## Deploy na Cloudflare Pages

1. **Wypchnij repo na GitHub** (publiczne lub prywatne — oba działają).

2. **Cloudflare Dashboard** → **Workers & Pages** → **Create application** →
   **Pages** → **Connect to Git**.

3. **Wybierz repo** i ustaw:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (zostaw pusty)
   - **Environment variables**: dodaj `NODE_VERSION` = `22`

4. **Save and Deploy**. Pierwszy build trwa ~1-2 min.

5. **Własna domena**: zakładka **Custom domains** → **Set up a custom domain**.
   SSL Cloudflare generuje automatycznie. Jeśli domena jest u nich, wystarczy
   wybrać; jeśli u innego rejestratora, trzeba zmienić nameservery lub dodać
   rekord CNAME.

6. **Po podpięciu domeny**: zaktualizuj `site:` w `astro.config.mjs`, `url` w
   `src/data/site.ts` i `Sitemap:` w `public/robots.txt` na finalną domenę
   (potrzebne dla poprawnego SEO i RSS).

## Opcje na później

- Formularz kontaktowy przez Cloudflare Workers / Web3Forms
- Wyszukiwarka po wpisach: [Pagefind](https://pagefind.app/)
- Analityka: [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) (bezpłatna, bez ciasteczek)
- i18n (PL/EN)
