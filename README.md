This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Image Optimization:

Next.js has a built in <Image /> component from next/image.

We use <Image /> Component over <img /> Because that offers:

Automatic Resizing Based on the Device Size

Lazy Loading by Default

Built-In CDN Support

Format Optimization

I

Static Assets:

Static Files like Images, fonts, scripts, icons etc.

Static Assets/Files should be stored in the public/ directory.

Access them via root-relative paths like /logo.png (which will maps to public/logo.png).
