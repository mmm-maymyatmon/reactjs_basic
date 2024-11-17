import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from "./components/posts/Post";
import AddPost from "./components/posts/AddPost";

function App() {
  const DB_NAME = "PostDB";
  const [posts, setPosts] = useState([]);

  const addNewPost = (post) => {
    setPosts([post, ...posts]);
  }

  useEffect(() => {
    let data = localStorage.getItem(DB_NAME);
    if (data) {
      setPosts(JSON.parse(data));
    }
  }, []);


  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem(DB_NAME, JSON.stringify(posts));
    }
  }, [posts]);

  const postDeleteHandler = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }


  return (
    <div className="container my-5">
      <Router>
        <Routes>
          <Route path="/" element={ <Post posts={posts} removePost={postDeleteHandler} /> }  />
          <Route path="/add" element = {<AddPost addPost={addNewPost} />} />
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App