"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();
  useEffect(() => {
    router.prefetch("/about"); //Eager preloaded about router
  }, []);

  return (
    <main className="container mt-5">
      <h1 className="text-primary">Hello world!</h1>
      <p className="lead">This is my home page</p>
    </main>
  );
}
// Next.js automatically prefetches routes linked with <Link /> when they become visible
//  Otherwise we can also manually prefetch them.