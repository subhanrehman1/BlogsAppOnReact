import React, { useEffect, useState } from "react";
import Blogs from "./blogs";
// import axios from "axios";
import useFetch from "./useFetch";
//"http://localhost:8000/blogs"

const Home = () => {
  // const [user, setUser] = useState("jerry");
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // const deleteBlogs = async (id) => {
  //   const newblogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newblogs);
  // };

  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {blogs && <Blogs prop={blogs} />}
      {error && <h1>{Error}</h1>}
    </div>
  );
};

export default Home;
