import Book from "../Components/Book";
import { BooksContext } from "../Contexts/BooksContext";
import { useContext, useState } from "react";
export function meta() {
  return [
    { title: "Buchsien" },
    { name: "description", content: "Welcome to Buchsien online library!" },
  ];
}

export default function Home() {
  const [ nameFilter, setNameFilter ] = useState("");
  const [ coverFilter, setCoverFilter ] = useState("");
  const [ pageFilter, setPageFilter ] = useState("");
  const [ authorFilter, setAuthorFilter ] = useState("");
  const [ descriptionFilter, setDescriptionFilter ] = useState("");
  
  const { bookList, setBookList } = useContext(BooksContext);

  const bookListHTML = bookList
    .filter((it) => nameFilter.length === 0 || it.name === nameFilter)
    .filter((it) => coverFilter.length === 0 || it.cover === coverFilter)
    .filter((it) => pageFilter.length === 0 || it.numberOfPages === pageFilter)
    .filter((it) => authorFilter.length === 0 || it.author === authorFilter)
    .filter((it) => descriptionFilter.length === 0 || it.description.includes(descriptionFilter))
    .map((it) => <Book key={it.id} book={it} />);
  return (
    <main>
      <input
        placeholder="Search by name"
        // value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        autoFocus
      ></input>

      <input
        placeholder="Search by cover"
        // value={coverFilter}
        onChange={(e) => setCoverFilter(e.target.value)}
        autoFocus
      ></input>

      <input
        placeholder="Search by pages"
        // value={pageFilter}
        onChange={(e) => setPageFilter(e.target.value)}
        autoFocus
      ></input>

      <input
        placeholder="Search by author"
        // value={authorFilter}
        onChange={(e) => setAuthorFilter(e.target.value)}
        autoFocus
      ></input>

      <input
        placeholder="Search by description"
        // value={descriptionFilter}
        onChange={(e) => setDescriptionFilter(e.target.value)}
        autoFocus
      ></input>
      
      {bookListHTML}
    </main>
  );
}
