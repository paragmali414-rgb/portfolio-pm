# Parag Mali — AI/ML Engineer Portfolio

A production-ready personal portfolio website for **Parag Mali**, an aspiring AI/ML Engineer specializing in Generative AI, Agentic Systems, Computer Vision, and Time-Series Forecasting.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Custom dark AI/ML palette)
- **Visuals**: Dynamic HTML5 Canvas Neural Network Visualizer
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (tested with Node v24.14.0)
- npm or pnpm

### Running Locally

```bash
# 1. Install dependencies (already installed in your folder)
npm install

# 2. Start the development server
npm run dev

# 3. Open your browser
# Visit http://localhost:3000
```

### Building for Production

```bash
# Run production build and type-checking
npm run build

# Start production server
npm run start
```

### Running Linter

```bash
npm run lint
```

---

## ⚙️ Central Configuration

All profile information, contact links, experience items, projects, skills, certificates, and achievements are centralized in one single configuration file:

👉 [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

### What You Can Easily Edit:
1. **GitHub Profile & Candidate Accounts**:
   - `githubPrimary`: Verified active link (`https://github.com/paragmali414-rgb`).
   - `githubCandidateAlternate`: Candidate link (`https://github.com/ParagMali`).
2. **Phone Number Visibility**:
   - Set `showPhone: true` or `false` to toggle phone visibility.
3. **Projects**:
   - Add new projects with titles, summaries, metrics, and repository links.
4. **Certifications**:
   - Add new certificates or update existing ones. Place new certificate images or PDFs in `public/Certifications/` and set `assetPath: "/Certifications/your-file.jpg"`.
5. **Resume**:
   - Your actual resume is served directly from `public/Parag Mali CV.pdf` via `/Parag%20Mali%20CV.pdf`.

---

## 🚢 Deploying to Vercel

1. Push this project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete AI/ML portfolio for Parag Mali"
   git branch -M main
   git remote add origin https://github.com/paragmali414-rgb/portfolio-pm.git
   git push -u origin main
   ```
2. Navigate to [vercel.com](https://vercel.com) and click **"Add New" > "Project"**.
3. Select your GitHub repository.
4. Next.js will be automatically detected.
5. Click **"Deploy"**.

---

## 📁 Project Structure

```
portfolio PM/
├── public/
│   ├── Certifications/          # Original certificate images and documents
│   ├── Parag Mali CV.pdf        # Original resume document
│   ├── profile.jpeg             # Professional headshot photo
│   └── favicon.svg              # PM monogram vector favicon
├── src/
│   ├── app/
│   │   ├── globals.css          # Dark palette, custom scrollbars, animations
│   │   ├── layout.tsx           # SEO metadata, OpenGraph, viewport settings
│   │   └── page.tsx             # Main page aggregating all portfolio sections
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky nav with smooth scroll & mobile drawer
│   │   ├── Hero.tsx             # Headline, profile photo card, CTAs & badges
│   │   ├── NeuralVisual.tsx     # Canvas neural network visualizer
│   │   ├── About.tsx            # Academic foundation, CGPA, engineering pillars
│   │   ├── Experience.tsx       # Timeline for GSA '26, upSkill intern, Kiran Academy
│   │   ├── Projects.tsx         # Filterable cards with verified repo links & metrics
│   │   ├── Skills.tsx           # Categorized skill tags (no arbitrary percentages)
│   │   ├── Certifications.tsx   # Searchable gallery with category filters
│   │   ├── CertificateModal.tsx # High-res modal viewer for certificate files
│   │   ├── Achievements.tsx     # GSA '26, Nano Banana Challenge Top 250, etc.
│   │   ├── Contact.tsx          # Copy email, pre-filled mailto, social links
│   │   └── Footer.tsx           # Copyright, dynamic year, back-to-top
│   ├── data/
│   │   └── portfolioData.ts     # Single source of truth configuration
│   └── lib/
│       └── utils.ts             # Tailwind class merge helper
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```
