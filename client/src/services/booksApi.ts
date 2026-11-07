import type { Book } from "../types/book";

export async function getBooks(): Promise<Book[]> {
  const response = await fetch("/api/books");

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const data: Book[] = await response.json();

  return data;
}
