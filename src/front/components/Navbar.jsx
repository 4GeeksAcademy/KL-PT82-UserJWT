import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		sessionStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
			<ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/signup">Signup</Link></li>
				<li><Link to="/login">Login</Link></li>
				<li><Link to="/private">Private</Link></li>
				<li>
					<button onClick={handleLogout} style={{ cursor: "pointer" }}>
						Logout
					</button>
				</li>
			</ul>
		</nav>
	);
};