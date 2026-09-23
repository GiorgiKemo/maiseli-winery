import { readFile } from "node:fs/promises";
import { join } from "node:path";
import Script from "next/script";

async function getPageMarkup() {
  const source = await readFile(join(process.cwd(), "dist", "index.html"), "utf8");
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1];

  if (!body) {
    throw new Error("The source page is missing its body markup.");
  }

  return body;
}

export default async function Home() {
  const markup = await getPageMarkup();

  return (
    <>
      <div className="contents" dangerouslySetInnerHTML={{ __html: markup }} />
      <Script src="/app.js" strategy="afterInteractive" />
    </>
  );
}
