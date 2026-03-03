import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please register first.");
      return;
    }
    if (email === storedUser.email && password === storedUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
      navigate("/Main");
    }else{
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <div className="card">

        <h2>Login</h2>

        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={handleLogin}>Login</button>

        <p className="link">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
       

      </div>
    </div>
  );
}

export default Login;