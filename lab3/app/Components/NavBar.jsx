import { NavLink } from "react-router";
import { useUser, logout } from "../data/userService";

export default function NavBar() {
  const user = useUser();
  return (
    <nav>
      <NavLink to="/">Library</NavLink>
      <NavLink to="/new">Add New</NavLink>
      {!!user || <NavLink to="/login" className="App-mini-button">Login</NavLink> }
        {!!user && <button className="App-mini-button" onClick={logout}>
          Logout {user?.displayName}
        </button>}
    </nav>
  );
}