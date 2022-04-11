import React from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
// import blogs from "./blogs";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  console.log(blog);
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };
  return (
    <div className="ui segment" id="blogs">
      <div>
        {isPending && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>
              <strong>Written by : {blog.author}</strong>
            </p>
            <div>{blog.body}</div>
            <button
              className="ui button green"
              id="deletebtn"
              onClick={handleDelete}
            >
              delete
            </button>
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
