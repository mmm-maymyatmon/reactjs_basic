import React, { useState } from "react";
import Post from "./components/posts/Post";
import AddPost from "./components/posts/AddPost";

 

function App() {
  const [posts, setPosts] = useState([
    {
        id: 1,
        title: "Post Title",
        desc: "Post Description" 
    },
    {
      id: 2,
      title: "Post Title 2",
      desc: "Post Description 2" 
  }
]);

const addNewPost = (post) => {
  setPosts([post, ...posts]);
}

  return (
    <div className="container my-5">
      <h1 className="text-xl text-center mb-5">Posts</h1>
      <AddPost addPost = { addNewPost } />
      <Post  posts={posts} />
    </div>
  )
}

export default App