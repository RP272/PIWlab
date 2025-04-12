import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Library</NavLink>
      <NavLink to="/new">Add New</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}