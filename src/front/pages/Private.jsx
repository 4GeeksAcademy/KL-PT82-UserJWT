import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Private() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        fetch("/api/private", {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Unauthorized");
                return res.json();
            })
            .then((data) => setUser(data))
            .catch(() => {
                sessionStorage.removeItem("token");
                setError("Unauthorized. Please login.");
                navigate("/login");
            });
    }, [navigate]);

    if (error) return <div>{error}</div>;
    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h2>Private Dashboard</h2>
            <p>Welcome, {user.email}!</p>
            <p>Your user ID: {user.id}</p>
        </div>
    );
}