import { NavLink } from "react-router";
import { useUser, logout } from "../data/userService";
import FavouriteContext from "../Contexts/FavouriteContext";
import { use } from "react";

export default function NavBar() {
  const user = useUser();

  const { state } = use(FavouriteContext);

  return (
    <nav>
      <NavLink to="/">Library</NavLink>
      {!!user && <NavLink to="/new">Add New</NavLink>}  
      {!!user || <NavLink to="/login">Login</NavLink> }
        {!!user && <NavLink onClick={logout}>
          Logout {user?.displayName}
        </NavLink>}
      <NavLink>💜 {state.length}</NavLink>
    </nav>
  );
}