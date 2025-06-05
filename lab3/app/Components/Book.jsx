import { use, useContext } from "react";
import { deleteBook } from "../data/bookService";
import { BooksContext } from "../Contexts/BooksContext";
import { auth } from "../data/init";
import { useNavigate } from "react-router";
import { useUser } from "../data/userService";
import FavouriteContext from "../Contexts/FavouriteContext";

export default ({ book }) => {
    const navigate = useNavigate();
    const { bookList, setBookList } = useContext(BooksContext);
    
    const {state, dispatch} = use(FavouriteContext);
    const handleAddNewFavourite = () => {
      if(state.includes(book)) return;
      dispatch({type: "ADD_BOOK", payload: book});
    }
    
    const user = useUser();
    const handleBookDelete = () => {
      if(auth?.currentUser?.uid != book.userId) return; 
      deleteBook(book.docID);
      setBookList(bookList.filter((it) => it.docID != book.docID));
    };

    return (
      <article className="bookInfo">
        <div>Book name: {book.name}</div>
        <div>Cover: {book.cover}</div>
        <div>Number of pages:{book.numberOfPages}</div>
        <div>Author: {book.author}</div>
        <div>Description: {book.description}</div>
        
        {!!user && user.uid == book.userId && <div className="bookButtons">
          <button onClick={(e) => { navigate("/edit/" + book.id.toString());
          }}>Edit</button>
          <button onClick={(e) => handleBookDelete()}>Delete</button>
        </div>}
        <button className="favouriteHeart" onClick={handleAddNewFavourite}>💜</button>
      </article>
    );
  };