import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/login", { email, password });
//       localStorage.setItem("token", res.data.token); // Store JWT token
//       setMessage(res.data.message || "Login successful!");
//       navigate("/dashboard"); // Redirect to dashboard
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Login failed");
//     }
//   };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <form >
        <h2>Login</h2>
        <div style={{ marginBottom: "10px" }}>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Login
        </button>
        <p style={{ marginTop: "10px", color: "green" }}>{message}</p>
        <p style={{ marginTop: "10px" }}>
          Don't have an account? <Link to="/Signup">Signup here</Link>
        </p>
      </form>
    </div>
  );
}
