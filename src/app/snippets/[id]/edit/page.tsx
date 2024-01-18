import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";

interface EditSnippetProps {
  params: {
    id: string;
  };
}
export default async function editSnippet(props: EditSnippetProps) {
  const id = +props.params.id;
  console.log(id);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });
  console.log("Snippet", snippet);
  if (!snippet) {
    return <p>Snippet not found</p>;
  }
  return <SnippetEditForm snippet={snippet} />;
}
