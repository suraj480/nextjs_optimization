# Next.js Project

http://localhost:3000/about

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To start the development server, run one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
## Lazy Loading in Next.js

Lazy loading is a technique where **components**, **images**, or **modules** are loaded *only when needed*—usually when they enter the viewport or are triggered via user interaction (e.g., a button click).

### 🚀 Benefits of Lazy Loading

- ⚡ **Reduced initial page load time**
- 📈 **Improved overall performance**
- 😀 **Enhanced user experience**, especially on slower networks

### ✅ Next.js Supports Lazy Loading For:

- 🖼️ **Images**
- 🧩 **Components**
- 📦 **Sections**

## Eager Loading

Eager loading refers to **preloading or pre-importing components or assets** so they are available immediately, instead of waiting for a user action or viewport trigger.

### 📌 Common Eager Loading Use Case

- 📦 ** 1.Static import of components** (i.e., not using `dynamic()`)
2.Images
3.Fonts -Use next/font with eager configuration
4.Scripts
5.Routes use Router.prefetch()
```

## ⏱️ Optimizing FCP and LCP in Next.js

### 📍 What is FCP (First Contentful Paint)?

FCP measures the time from when the page starts loading to when **any content (text, image, etc.)** is rendered on screen.

- ⚠️ **High FCP** → Leads to a blank screen for too long
- ✅ **Goal**: FCP < **1.8 seconds**

---

### 📍 What is LCP (Largest Contentful Paint)?

LCP measures the time it takes for the **largest visible element** (like an image, large heading, or video) to appear on the screen.

- ⚠️ **High LCP** → Important content feels slow to load
- ✅ **Goal**: LCP < **2.5 seconds**

---

### 🛠️ Common Causes of Poor FCP and LCP in Next.js Projects

| Cause/Reason                 | Impact   |
| ---------------------------- | -------- |
| Lazy image loading           | High LCP |
| Blocking scripts             | High FCP |
| No font optimization         | Both     |
| Too many CSS/JS files        | Both     |
| Late loading layout elements | High LCP |

## Optimization Techniques for Improved FCP and LCP

Apply the following techniques in your Next.js project to improve performance metrics like First Contentful Paint (FCP) and Largest Contentful Paint (LCP):

| Technique                          | Metrics Affected |
| ---------------------------------- | ---------------- |
| Use `<Image priority />`          | LCP              |
| Use `next/font`                   | FCP, LCP         |
| Avoid unnecessary lazy-loading    | LCP              |
| Use `<Head>` to preload critical assets | FCP         |
| Minimize layout shift             | FCP              |
| Self-host fonts                   | FCP, LCP         |
