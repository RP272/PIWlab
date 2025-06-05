import { NavLink } from "react-router";
import { useUser, logout } from "../data/userService";
import FavouriteContext from "../Contexts/FavouriteContext";
import { use, useRef } from "react";

export default function NavBar() {
  const favouritesRef = useRef();
  const user = useUser();

  const { state, dispatch } = use(FavouriteContext);
  const favouriteHTML = state.map((it) => {
    return <article key={it.id} onClick={(event) => {removeBook(event, it)}}>
      {it.name}
    </article>
  });

  const toggleDropdown = () => {
    favouritesRef.current.style.display = favouritesRef.current.style.display === "block" ? "none" : "block";
    favouritesRef.current.classList.toggle("show");
    favouritesRef.current.classList.toggle("hide");
  };

  const removeBook = (event, book) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch({type: "REMOVE_BOOK", payload: book});
  }

  return (
    <nav>
      <NavLink to="/">Library</NavLink>
      {!!user && <NavLink to="/new">Add New</NavLink>}  
      {!!user || <NavLink to="/login">Login</NavLink> }
        {!!user && <NavLink onClick={logout}>
          Logout {user?.displayName}
        </NavLink>}
        <a id="dropdown" onClick={toggleDropdown}>
          💜 {state.length}
          <div className="hide" id="favourites" ref={favouritesRef}>
            {favouriteHTML.length === 0 ? <article>empty :c</article> : favouriteHTML}
          </div>
        </a>
    </nav>
    
  );
}