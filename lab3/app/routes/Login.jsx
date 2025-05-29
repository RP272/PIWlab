import { useState } from "react";
import { login, loginWithEmail } from "../data/userService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginWithEmail(username, password, navigate);
  }

  return (
    <form onSubmit={handleLogin}>
     <section id="mainLibrary">
        <section id="mainSection">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <label htmlFor="pasword">Password</label>
          <input 
            id="password" 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="App-mini-button">Login with email</button>
          <button className="App-mini-button" onClick={() => login(navigate)}>Login with Google</button>
        </section>
      </section>
    </form>
  )
}

export default Login;