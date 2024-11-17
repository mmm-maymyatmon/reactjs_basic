import React, { useState } from "react";
import Post from "./components/posts/Post";

 

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
])
  return (
    <div className="container my-5">
      <h1 className="text-xl text-center mb-5">Posts</h1>
      <Post  posts={posts} />
    </div>
  )
}

export default App