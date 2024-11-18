import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from "./components/posts/Post";
import AddPost from "./components/posts/AddPost";
import PostDetail from "./components/posts/PostDetail";

function App() {
  const END_POINT = "http://localhost:9000";
  const [posts, setPosts] = useState([]);

  const addNewPost = (post) => {
    setPosts([post, ...posts]);
  }

  useEffect(() => {
    const fetchData = async () => {
      let data = await (await fetch(`${END_POINT}/posts`)).json();
      setPosts(data); 
    };
    fetchData();
  }, []);
  

  const postDeleteHandler = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }


  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={ <Post posts={posts} removePost={postDeleteHandler} /> }  />
          <Route path="/add" element = {<AddPost addPost={addNewPost} />} />
          <Route path="/post/:id" element = {<PostDetail />} />
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App