import { deleteSnippet } from "@/actions";
import { db } from "@/db";
import Link from "next/link";
interface ViewPageProps {
  params: {
    id: string;
  };
}
export default async function viewSnippet(props: ViewPageProps) {
  const id = +props.params.id;
  console.log("Viewing snippet of id ", id);
  const snippet = await db.snippet.findUnique({
    where: {
      id,
    },
  });
  if (!snippet) {
    return <p>Snippet not found</p>;
  }
  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "column", background: "#290" }}
      >
        <h1 style={{ fontSize: "3rem" }}>{snippet.title}</h1>
        <textarea value={snippet.code} disabled rows={22} cols={22} />
      </div>
      <Link href={`/snippets/${snippet.id}/edit`}>Edit</Link>
      <form action={deleteSnippet.bind(null, snippet.id)}>
        <button type="submit" style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </form>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => {
    return { id: snippet.id.toString() };
  });
}
