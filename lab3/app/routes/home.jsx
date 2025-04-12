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
      <section id="filters">
            <div>
                <label htmlFor="name">Search by name: </label>
                <input
                  id="name"
                  name="name"
                  placeholder="title"
                  onChange={(e) => setNameFilter(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="cover">Search by cover: </label>
                <select
                id="cover"
                name="cover"
                onChange={(e) => setCoverFilter(e.target.value)}>
                  <option value="" >all</option>
                  <option value="hard" >hard</option>
                  <option value="soft" >soft</option>
                </select>
            </div>
            <div>
                <label htmlFor="pageQuantity">Search by pages: </label>
                <input
                id="pageQuantity"
                name="pageQuantity"
                placeholder="# of pages"
                onChange={(e) => setPageFilter(e.target.value)}
              ></input>
            </div>
            <div>
                <label htmlFor="author">Search by author: </label>
                <input
                id="author"
                name="author"
                placeholder="full name"
                onChange={(e) => setAuthorFilter(e.target.value)}
              ></input>
            </div>
            <div>
                <label htmlFor="wordInDescription">Search by description: </label>
                <input
                id="wordInDescription"
                name="wordInDescription"
                placeholder="sentence"
                onChange={(e) => setDescriptionFilter(e.target.value)}
              ></input>
            </div>
        </section>
      <hr />
      {bookListHTML}
    </main>
  );
}
