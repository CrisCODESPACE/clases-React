import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {user ? <span>{user.name}</span> : <Link to="/login">Login</Link>}
      </nav>
    </div>
  );
};

export default Navbar;
