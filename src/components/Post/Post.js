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
      <h1 className="text-danger my-4">All Post: {posts.length} </h1>
      <div className="container">
        {posts.map((post) => (
          <div key={post.id}>
            <div className="row">
              <div class="col-md-6 rounded-3 w-50 mx-auto gy-5">
                <div class="card-body bg-light">
                  <h5 class="card-title">{post.title}</h5>
                  <p class="card-text">{post.body}</p>
                  <span className="my-4 px-2 cursor-pointer text-center text-warning border rounded">
                    {post.userId}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
