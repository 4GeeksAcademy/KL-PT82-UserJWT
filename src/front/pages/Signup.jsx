import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/signup", { email, password });
//       setMessage(res.data.message || "Signup successful!");
//       // Redirect to login after 1.5 seconds
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Signup failed");
//     }
//   };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <form >
        <h2>Signup</h2>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Signup
        </button>
        <p style={{ marginTop: "10px", color: "green" }}>{message}</p>
        <p style={{ marginTop: "10px" }}>
          Already have an account? <Link to="/Login">Login here</Link>
        </p>
      </form>
    </div>
  );
}
