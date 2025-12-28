# Axiom Token Discovery Table

A production-style token discovery table inspired by modern crypto trading platforms.  
Built with a strong focus on **performance, clean architecture, and real-time UX**.

---

## 🚀 Live Demo
👉 (Add Vercel deployment link here)

---

## 🛠 Tech Stack
- Next.js 14 (App Router)
- TypeScript (Strict mode)
- Tailwind CSS
- Atomic Design Architecture
- React Hooks

---

## ✨ Features
- Token discovery tabs (New / Final / Migrated)
- Sorting by price & 24h % change
- Mock real-time price updates
- Skeleton loading & error boundaries
- Pixel-perfect dark UI
- Fully responsive (320px+)

---

## 🧱 Architecture
The project follows **Atomic Design principles**:

- Atoms / Molecules / Organisms
- Custom reusable hooks
- Clear separation of concerns

This structure ensures scalability and maintainability.

---

## ⚡ Performance
- `useMemo` for optimized sorting
- `useCallback` for stable handlers
- No layout shifts during loading
- Minimal re-renders

---

## 📱 Responsiveness
- Desktop: full-width table
- Mobile: horizontal scrolling for data-heavy layout
- Scrollbars hidden for a clean trading UI

---

## 🧪 Real-Time Simulation
Prices update automatically using a **mock WebSocket simulation** to demonstrate live market behavior.

---

## ▶️ Setup & Run
```bash
npm install
npm run dev
