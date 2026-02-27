import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Navbar({ title }) {
  const {handleLogout} = useContext(AuthContext); 
  return (
    <div className="navbar">
      <h1>{title}</h1>
      <div className="nav-links">
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/water">Water</Link>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
    </div>
  );
}