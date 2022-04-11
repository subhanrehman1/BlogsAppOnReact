import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>not found</h1>
      <p>Sorry bro this page cannot be found.</p>
      <Link to="/">Go back to Home page</Link>
    </div>
  );
};

export default NotFound;
