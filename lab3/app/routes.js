import { index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("new", "routes/New.jsx"),
    route("edit/:bookID", "routes/Edit.jsx"),
    route("login", "routes/Login.jsx")
];
