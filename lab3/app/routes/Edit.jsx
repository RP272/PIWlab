import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../Contexts/BooksContext";
import CoverSelector from "../Components/CoverSelector";
import { createBook, readBooks, updateBook } from "../data/bookService";
import { useNavigate } from "react-router";
import { useUser } from "../data/userService";

export function meta() {
  return [
    { title: "Edit book" },
    { name: "description", content: "Website for Buchsien online library" },
  ];
}

export default function Edit(params) {
    const navigate = useNavigate();
    const user = useUser();

    const { bookList, setBookList } = useContext(BooksContext);
    const [ newTitle, setNewTitle ] = useState("");
    const [ newPages, setNewPages ] = useState(0);
    const [ newAuthor, setNewAuthor ] = useState("");
    const [ newDescription, setNewDescription ] = useState("");
    const [ selectedCover, setSelectedCover ] = useState("hard");
    
    useEffect(()=>{
        if(!user){
            navigate("/");
        }
        const bookID = params.params.bookID;
        const book = bookList.filter((it) => it.id == bookID)[0];
        if(user.uid != book.userId){
            navigate("/");
        }
        if(!!book){
            setNewTitle(book.name);
            setNewPages(book.numberOfPages);
            setNewAuthor(book.author);
            setNewDescription(book.description);
            setSelectedCover(book.cover);
        }
    }, [])

    const handleEditBook = (e) => {
        e.preventDefault();
        const bookID = params.params.bookID;
        const book = bookList.filter((it) => it.id == bookID)[0];

        if (!newTitle || !newPages || !newAuthor || !newDescription) return;
        const tempBook = {
            docID: book.docID,
            id: book.id,
            name: newTitle,
            cover: selectedCover,
            numberOfPages: newPages,
            author: newAuthor,
            description: newDescription,
            userId: book.userId,
            created: book.created
        };
        updateBook(book.docID, tempBook)
        .then(readBooks()
        .then(docs => {
            setBookList(docs);
        }))
        alert("Book has been edited!")
        navigate("/");
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
                            <button id="addButton" onClick={handleEditBook}>Edit</button>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    );
}