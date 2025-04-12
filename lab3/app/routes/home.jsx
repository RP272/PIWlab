import Book from "../Components/Book";
import { BooksContext } from "../Contexts/BooksContext";
import { useContext } from "react";
export function meta() {
  return [
    { title: "Buchsien" },
    { name: "description", content: "Welcome to Buchsien online library!" },
  ];
}

export default function Home() {
  const { bookList, setBookList } = useContext(BooksContext);

  const bookListHTML = bookList.map((it) => <Book key={it.id} book={it} />);

  return (
    <main>
      {bookListHTML}
    </main>
  );
}
