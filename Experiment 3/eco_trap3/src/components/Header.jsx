import { NavLink } from "react-router-dom";

export default function Header(){
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="logo">Eco Track</h1>
        <nav className="nav">
          <NavLink to="summary" className="nav-link">Summary</NavLink>
          <NavLink to="analytics" className="nav-link">Analytics</NavLink>
          <NavLink to="/logs" className="nav-link">Logs</NavLink>
          <NavLink to="/login" className="nav-link auth">Login</NavLink>
        </nav>
      </div>
    </header>
  );
}