import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navigation: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/parents">School Management</Link>
      </div>

      <div className="nav-links">
        <Link to="/parents">Parents</Link>
        {/* Add more navigation links here */}
      </div>

      <div className="nav-user">
        <span>
          Welcome, {user?.username} ({user?.role})
        </span>
        <button onClick={logout} className="btn btn-secondary btn-sm">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
