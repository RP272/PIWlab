import { NavLink } from "react-router";
import { useUser, logout } from "../data/userService";

export default function NavBar() {
  const user = useUser();
  return (
    <nav>
      <NavLink to="/">Library</NavLink>
      {!!user && <NavLink to="/new">Add New</NavLink>}  
      {!!user || <NavLink to="/login">Login</NavLink> }
        {!!user && <NavLink onClick={logout}>
          Logout {user?.displayName}
        </NavLink>}
    </nav>
  );
}