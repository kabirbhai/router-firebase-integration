import React, { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <h1>All Post: {posts.length} </h1>
    </div>
  );
};

export default Post;
