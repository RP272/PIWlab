import { useContext, useState } from "react";
import { BooksContext } from "../Contexts/BooksContext";
import CoverSelector from "../Components/CoverSelector";

export function meta() {
  return [
    { title: "New book" },
    { name: "description", content: "Website for Buchsien online library" },
  ];
}

export default function New() {
    const { bookList, setBookList } = useContext(BooksContext);
    const [ newTitle, setNewTitle ] = useState("");
    const [ newPages, setNewPages ] = useState(0);
    const [ newAuthor, setNewAuthor ] = useState("");
    const [ newDescription, setNewDescription ] = useState("");
    const [ selectedCover, setSelectedCover ] = useState("hard");

    const handleNewBook = (e) => {
        e.preventDefault();
        if (!newTitle || !newPages || !newAuthor || !newDescription) return;
        const tempBook = {
            id: bookList.length + 1,
            name: newTitle,
            cover: selectedCover,
            numberOfPages: newPages,
            author: newAuthor,
            description: newDescription,
        };
        setBookList((prev) => prev.concat([tempBook]));
    };

    return (
        <main >
        <form>
            <input
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            autoFocus
            />
            <CoverSelector
            selectedCover={selectedCover}
            setSelectedCover={setSelectedCover}
            />
            <input
            placeholder="Number of pages"
            value={newPages}
            onChange={(e) => setNewPages(e.target.value)}
            autoFocus
            />
             <input
            placeholder="Author"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            autoFocus
            />
             <input
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            autoFocus
            />     
            <button onClick={handleNewBook}>Add</button>
        </form>
        </main>
    );
}