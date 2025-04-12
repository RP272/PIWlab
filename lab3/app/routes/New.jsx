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
        alert("New book has been added!")
    };

    return (
        <section id="mainNew">
            <section id="sideBar"></section>

            <section id="mainSection">
                <div id="addBook">
                    <form>
                        <div>
                            <label for="name">Book name: </label>
                            <input
                            placeholder="Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            autoFocus
                            />
                        </div>
                        <div>
                            <label for="cover">Cover: </label>
                            <CoverSelector
                            selectedCover={selectedCover}
                            setSelectedCover={setSelectedCover}
                            />
                        
                        </div>
                        <div>
                            <label for="pageQuantity">Number of pages: </label>
                            <input
                            placeholder="Number of pages"
                            value={newPages}
                            onChange={(e) => setNewPages(e.target.value)}
                            autoFocus
                            />
                        </div>
                        <div>
                            <label for="author">Author: </label>
                            <input
                            placeholder="Author"
                            value={newAuthor}
                            onChange={(e) => setNewAuthor(e.target.value)}
                            autoFocus
                            />
                        </div>
                        <div>
                            <label for="description">Description: </label>
                            <input
                            placeholder="Description"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            autoFocus
                            />   
                        </div>
                        <div id="buttonWrapper">
                            <button id="addButton" onClick={handleNewBook}>Add</button>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    );
}