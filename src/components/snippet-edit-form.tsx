"use client";
import { updateSnippet } from "@/actions";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  return (
    <div>
      <Editor
        height={"40vh"}
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        onChange={(value = "") => setCode(value)}
      />
      <form action={updateSnippet.bind(null, snippet.id, code)}>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
