import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">All</NavLink>
      <NavLink to="/new">Add New</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}