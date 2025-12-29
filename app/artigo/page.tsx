"use client";

import { articleContent } from "@/artigo/article";

export default function Home() {
  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: articleContent }} />
    </main>
  );
}
