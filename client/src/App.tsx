import { useEffect, useState } from "react";
import type { Book } from "./types/book";
import { getBooks } from "./services/booksApi";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function loadBooks() {
   try{
     const data = await getBooks();
      setBooks(data);
   }
  catch (error) {
    console.error(error);
    }
}
loadBooks();
  });
  return (
    <main>
      <h1>My Library</h1>

      {books.length === 0 ? (
        <p>Your library is empty.</p>
      ) : (
        books.map((book) => (
          <article key={book.id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
          </article>
        ))
      )}
    </main>
  );
}

export default App;
