import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>{" | "}
      <Link to="/dashboard">Dashboard</Link>{" | "}

      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
