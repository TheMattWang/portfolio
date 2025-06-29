# Matt Wang — Personal Portfolio

> A clean, warm, and modern site showcasing my projects, writing, and research, plus a conversational "MattBot" powered by Gemini.

![GitHub last commit](https://img.shields.io/github/last-commit/your‑username/portfolio?style=for-the-badge)
![GitHub deployments](https://img.shields.io/github/deployments/your‑username/portfolio/github-pages?label=GH Pages\&style=for-the-badge)

---

## ✨ Features

| Section      | What you’ll find                                          |
| ------------ | --------------------------------------------------------- |
| **Landing**  | Name, tagline, call‑to‑action                             |
| **About**    | Brief bio + tech/tool highlights                          |
| **Projects** | Cards with GitHub + live demo links                       |
| **Blog**     | Two feeds: `Life & Writing` and `Build Logs`              |
| **Resume**   | PDF download                                              |
| **Contact**  | Form (Render email webhook) + social icons                |
| **MattBot**  | Chat widget that answers questions using MCP‑RAG + Gemini |

---

## 🛠 Tech Stack

* **Next.js 14** (App Router)
* **Tailwind CSS** + **shadcn/ui**
* **MDX** via **contentlayer**
* **Framer Motion** for subtle animations
* **GitHub Pages** for static hosting
* **Node 20 Express** backend on **Render** (free tier)
* **MCP** (multi‑context provider) retrieval
* **Gemini Pro 1.5** LLM + embeddings

Design tokens live in **[`./.cursor/design-system.mdc`](./.cursor/design-system.mdc)**.

---

## 📂 Repository Layout (simplified)

```text
.
├─ app/                 # Next.js routes (app dir)
│  ├─ about/
│  ├─ projects/
│  ├─ blog/
│  └─ contact/
├─ components/          # Reusable UI (Navbar, Footer, Card…)
├─ content/             # MDX posts (writing/ & builds/ folders)
├─ backend/             # Express API for /api/chat
├─ public/              # Static assets (images, resume.pdf)
├─ .cursor/             # AI rules & design docs
│  ├─ rules.md
│  ├─ design-system.mdc
│  └─ backend.mdc
└─ README.md            # You are here
```

---

## 🚀 Getting Started

### Prerequisites

| Tool     | Version |
| -------- | ------- |
| **Node** | 20 .x   |
| **pnpm** | ≥ 8     |

### 1. Clone & install

```bash
git clone https://github.com/your‑username/portfolio.git
cd portfolio
pnpm install
```

### 2. Run locally (frontend only)

```bash
pnpm dev       # http://localhost:3000
```

### 3. Run backend locally

```bash
cd backend
pnpm install
pnpm start     # http://localhost:8787 (or PORT)
```

Create a `.env` in `/backend`:

```env
GEMINI_API_KEY=sk‑...
GITHUB_TOKEN=ghp_...
MCP_CACHE_URL=redis://localhost:6379
```

> **Note**: The frontend expects `VITE_CHAT_API_URL` (or similar) pointing to the backend URL.

---

## 🏗 Deployment

### Static site → GitHub Pages

```bash
pnpm build          # next build
pnpm export         # outputs to /out
npx gh-pages -d out # pushes to gh‑pages branch
```

### Backend → Render

1. Create a **Web Service** from this repo, root = `/backend`.
2. Build cmd `pnpm install` · Start cmd `node index.js`.
3. Add env vars in Render dashboard.
4. Note the public URL (e.g. `https://mattbot.onrender.com`).

Update frontend `.env`:

```env
NEXT_PUBLIC_CHAT_API=https://mattbot.onrender.com/api/chat
```

Republish GH Pages for the new URL to take effect.

---

## 📏 Design System quick view

| Color                                                      | Token         | Example              |
| ---------------------------------------------------------- | ------------- | -------------------- |
| ![#292524](https://dummyimage.com/16x16/292524/292524.png) | stone‑900     | Text / dark surfaces |
| ![#78716C](https://dummyimage.com/16x16/78716C/78716C.png) | stone‑600     | Body text            |
| ![#F5F5F4](https://dummyimage.com/16x16/F5F5F4/F5F5F4.png) | stone‑100     | Light bg             |
| ![#F97316](https://dummyimage.com/16x16/F97316/F97316.png) | coral‑500     | Accent               |
| ![#FACC15](https://dummyimage.com/16x16/FACC15/FACC15.png) | sunflower‑400 | Hover accent         |

Fonts: **Inter** (body) · **Playfair Display** (headings).  Spacing: 4 px scale.

---

## 🗺 Roadmap

* [ ] Finish scaffolding components & pages
* [ ] Wire Contentlayer for MDX blog feeds
* [ ] Integrate backend chat widget (SSE stream)
* [ ] Add vector cache (Redis) to MCP layer
* [ ] Lighthouse pass ≥ 95
* [ ] Unit tests with Vitest + Testing Library

---

## 🤝 Contributing

1. Fork → create feature branch.
2. Follow coding conventions in **`.cursor/rules.md`**.
3. Run `pnpm format && pnpm test` before PR.
4. PR title: `feat:` / `fix:` / `docs:` + concise summary.

---

## 📄 License

MIT © 2025 Matthew Wang
