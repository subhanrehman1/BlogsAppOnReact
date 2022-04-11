import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="title">Bloggerpost.com</div>
      <div className="ui segment">
        <Link className="link" to="/">
          Home{" "}
        </Link>
        <Link className="link" to="/create">
          New blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
