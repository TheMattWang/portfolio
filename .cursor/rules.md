# Cursor Rules — Matt Wang Personal Portfolio

> These rules are loaded automatically by Cursor to guide every AI generation for this project. Keep them concise but authoritative. Update consciously.

---

## 1 · Design Tokens

| Token             | Hex       | Usage                                       |
| ----------------- | --------- | ------------------------------------------- |
| **stone‑900**     | `#292524` | Dark text, dark‑mode surfaces               |
| **stone‑600**     | `#78716C` | Body text, borders, icons                   |
| **stone‑100**     | `#F5F5F4` | Light backgrounds                           |
| **coral‑500**     | `#F97316` | Primary accent (buttons, links, focus)      |
| **sunflower‑400** | `#FACC15` | Secondary accent (hover states, highlights) |

```css
:root {
  --stone-900: #292524;
  --stone-600: #78716C;
  --stone-100: #F5F5F4;
  --coral-500: #F97316;
  --sunflower-400: #FACC15;
}
```

* **Fonts:** `Inter` (body / UI) • `Playfair Display` (headings)
* **Spacing scale:** Tailwind default; prefer multiples of `4px`.

---

## 2 · Tech Stack Assumptions

* **Framework:** Next.js 14 using the **`/app`** router.
* **Styling:** TailwindCSS + `shadcn/ui` components.
* **Animations:** Framer Motion for subtle entrance effects only.
* **Blog:** MDX via contentlayer (installed).
* **Package manager:** PNPM.

---

## 3 · Coding Conventions

1. **No inline styles**—use Tailwind utilities or `className` props only.
2. **Component files** use `PascalCase.tsx`; hooks use `useSomething.ts`.
3. Import order: React → Next → third‑party → local alias `@/`.
4. **Accessibility:** All interactive elements have clear focus states (WCAG AA contrast).
5. **Testing:** Provide at least one meaningful unit test for every new utility.

### 3.1 Responsive Baseline

| Purpose              | Tailwind classes                                       |
| -------------------- | ------------------------------------------------------ |
| **Section wrapper**  | `max-w-4xl mx-auto px-4 sm:px-6`                       |
| **Card grid**        | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6` |
| **Two‑col timeline** | `grid md:grid-cols-[auto,1fr] gap-x-8`                 |
| **Hide on mobile**   | `hidden sm:block`                                      |
| **Show only mobile** | `block sm:hidden`                                      |

*Build **mobile‑first** then layer `sm:` `md:` `lg:` modifiers.*

---

## 4 · Experience Section Conventions

* **Route:** `/experience` (folder `app/experience`).
* **Data source:** `@/data/experience.ts` exporting `Job[]` (see interface below).
* **Main component:** `ExperienceTimeline.tsx`.

```ts
// data/experience.ts
export interface Job {
  company: string;
  role: string;
  period: string;  // "May 2025 – Aug 2025"
  bullets: string[]; // ≤ 2 impact lines
  logo: string;   // /public/company.svg
}
```

### Layout rules

1. **Mobile (< 768 px):** vertical stack of cards (`mb-8`).
2. **≥ md:** two‑column timeline using `grid md:grid-cols-[auto,1fr] gap-x-8`.
   *Left col* = bullet dot + dates (`max-content` width).
   *Right col* = card with company, role, bullets.
3. Cards: `rounded-2xl shadow-sm border border-stone-100 p-4 bg-white dark:bg-stone-900`.
4. Provide `aria-label` on each timeline entry (`aria-label="Job at Equilibrium Energy"`).
5. **Do NOT** copy full résumé bullets; keep it concise and link to PDF for full résumé.

---

## 5 · AI Guard‑Rails (Read *first*)

* **Strict scope:** Only touch files relevant to the current prompt. If unsure, leave a comment asking for confirmation.
* **Do NOT** add or remove external libraries unless explicitly requested.
* **Do NOT** rename or restructure folders unprompted.
* **Preserve data**: Never delete blog posts, MDX files, `public` assets, or `data/experience.ts`.
* **Security:** Never expose secrets on the client; use env vars on the server.
* Place `// TODO(Matt): …` where human input/content is required.

---

## 6 · Common Mistakes to Avoid

* Re‑implementing `shadcn/ui` components from scratch.
* Forgetting to run `pnpm format` → CI fails.
* Overshooting animation timing (keep ≤ 300 ms).
* Using low‑contrast text (`stone‑600` on `stone‑100` is OK; anything lighter fails AA).

---

## 7 · Commit Etiquette

| Action                | Commit prefix |
| --------------------- | ------------- |
| New feature/component | `feat:`       |
| Bug fix               | `fix:`        |
| Docs / rules updates  | `docs:`       |
| Refactor / chore      | `chore:`      |

Commit early, commit often before each AI generation burst.

---

*Last updated: 2025‑06‑29*
