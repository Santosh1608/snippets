"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title");
    const code = formData.get("code");
    if (typeof title != "string" || title.length <= 3) {
      return { message: "title is too short" };
    }

    if (typeof code != "string" || code.length <= 5) {
      return { message: "code is too short" };
    }

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    revalidatePath("/");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    }
  }
  redirect("/");
}

export async function updateSnippet(id: number, code: string) {
  await db.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: {
      id,
    },
  });
  redirect("/");
}
