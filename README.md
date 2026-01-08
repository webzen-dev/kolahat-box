# kolahat-box

Frontend web application built with **Next.js v16 (App Router)** using a **Feature-based (Domain-oriented) architecture**, designed to be **monorepo-ready**.

---

## 🧱 Architecture Overview

This project follows a **Feature-based Frontend Architecture on Next.js App Router**.

The core idea is to organize the UI by **features (domains)** instead of technical layers like `components`, `hooks`, or `utils`.

Each feature owns its UI and logic, while routing is handled exclusively by Next.js.

---

## 📁 Project Structure
```plaintext
web/
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── globals.css
    │   ├── not-found.tsx
    │   ├── loading.tsx
    │   ├── page.tsx
    │   ├── about-us/
    │   │   ├── page.tsx
    │   │   └── sections.tsx
    │   ├── contact/
    │   │   └── page.tsx
    │   ├── dashboard/
    │       ├── layout.tsx
    │       ├── page.tsx
    │       └── loading.tsx
    │
    ├── features/
    │   ├── about/
    │   │   ├── sections/
    │   │   │   ├── Hero.tsx
    │   │   │   ├── Team.tsx
    │   │   │   └── Vision.tsx
    │   │   └── index.ts
    │   ├── contact/
    │   │   ├── components/
    │   │   └── index.ts
    │   ├── auth/
    │       ├── components/
    │       ├── hooks/
    │       └── index.ts
    │
    ├── shared/
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Input.tsx
    │   │   └── Modal.tsx
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   └── Footer.tsx
    │   ├── hooks/
    │   ├── lib/
    │   └── types/
    │
    ├── config/
    │   ├── env.ts
    │   └── constants.ts
    ├── styles/
    └── types/
```
---

## 🧠 Architectural Principles

### 1. App Router as the Single Routing Layer
- All routes live inside `app/`
- Route files (`page.tsx`, `layout.tsx`) only compose UI
- No business logic inside routes

### 2. Feature Ownership
- Each feature is isolated inside `features/`
- A feature can include UI, hooks, types, and internal logic
- Features never import from `app/`

### 3. Shared Is Truly Shared
- `shared/` contains reusable, domain-agnostic code
- No feature-specific logic is allowed inside `shared/`

### 4. One-way Dependency Rule
app → features → shared

Reverse imports are not allowed.

---

## 📦 Subpackage Today, Monorepo Tomorrow

Currently, `kolahat-box` is developed as a **subpackage (standalone web app)**.

The architecture is intentionally designed to support a **future migration to a monorepo** with minimal refactoring.


Thanks to clear boundaries between `app`, `features`, and `shared`, the migration will mainly involve:
- Moving folders
- Updating path aliases
- No architectural rewrite

---

## ⚙️ Next.js Compatibility

- Fully compatible with **Next.js v16**
- Uses **App Router**
- Supports layouts, loading states, and server components
- Aligned with official Next.js architectural recommendations

---

## ✅ Why This Architecture

- Scales well for large applications
- Easy to reason about and maintain
- Team-friendly and monorepo-ready
- Prevents common folder-structure anti-patterns

---

## 📌 Summary

- Architecture: **Feature-based (Domain-oriented)**
- Framework: **Next.js v16 (App Router)**
- Backend: **Separated (CMS & API)**
- Current setup: **Subpackage**
- Future plan: **Monorepo migration**

This structure prioritizes long-term maintainability over short-term convenience.





