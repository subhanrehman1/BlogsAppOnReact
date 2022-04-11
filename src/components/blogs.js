import React from "react";
import { Link } from "react-router-dom";
import "./blogs.css";
const blogs = (props) => {
  return props.prop.map((blog) => {
    return (
      <div className="ui segment" id="blogs" key={blog.id}>
        <Link to={`/blogdetails/${blog.id}`}>
          <div>
            <strong>{blog.title}</strong>
          </div>

          <div>Written by: {blog.author}</div>
        </Link>
      </div>
    );
  });
};

export default blogs;
