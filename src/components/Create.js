import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./create.css";
const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [body, setBody] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Write your blog!</h2>
      <form onSubmit={handleSubmit}>
        <div className="ui form">
          <div className="field">
            <label style={{ color: "#22c55e" }}>Blog Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="field">
            <label style={{ color: "#22c55e" }}>Blog Body</label>
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div className="field">
            <label style={{ color: "#22c55e" }}>Blog Author</label>
            <select
              style={{ color: "#22c55e" }}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option style={{ color: "#22c55e" }} value="Mario">
                Mario
              </option>
              <option style={{ color: "#22c55e" }} value="Luigi">
                Luigi
              </option>
            </select>
          </div>
          <button className="ui button green" id="submitbtn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
