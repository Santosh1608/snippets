import { db } from "@/db";
import Link from "next/link";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Snippets</h2>
        <Link href={"/snippets/new"}>New</Link>
      </div>
      <div>
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "3px 8px",
              border: "1px solid #000",
              marginTop: "2px",
            }}
          >
            <p>{snippet.title}</p>
            <Link href={`/snippets/${snippet.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
