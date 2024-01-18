"use client";
import { createSnippet } from "@/actions";
import { useFormState } from "react-dom";
export default function CreateNewSnippetPage() {
  const [formState, action] = useFormState(createSnippet, { message: "" });
  return (
    <form
      action={action}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "3px",
        marginTop: "5px",
      }}
    >
      <input
        type="text"
        name="title"
        style={{ border: "1px solid green", marginBottom: "2px" }}
        placeholder="Enter title"
      />
      <textarea
        name="code"
        style={{ border: "1px solid blue", background: "#222", color: "white" }}
        rows={12}
      />
      <button style={{ background: "#687" }}>Save</button>
      {formState.message && <p>{formState.message}</p>}
    </form>
  );
}
