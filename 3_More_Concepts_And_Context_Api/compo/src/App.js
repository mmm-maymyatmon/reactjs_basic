import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from "./components/posts/Post";
import AddPost from "./components/posts/AddPost";
import PostDetail from "./components/posts/PostDetail";
import EditPost from "./components/posts/EditPost";

function App() {
  const END_POINT = "http://localhost:9000/posts";
  const [posts, setPosts] = useState([]);

  const addNewPost = async (post) => {
    await fetch(END_POINT, {
      method: "POST",
      body: JSON.stringify({
        title: post.title,
        desc: post.desc
      }),
      headers: {
        "content-type": "application/json"
      }
    })
    setPosts([post, ...posts]);
  }

  useEffect(() => {
    const fetchData = async () => {
      let posts = await (await fetch(`${END_POINT}`)).json();
      setPosts(posts);
    };
    fetchData();
  }, []);


  const postDeleteHandler = async (id) => {
    await fetch(END_POINT + "/" + id, {
      method: "DELETE"
    })
    setPosts(posts.filter(post => post.id !== id));
  }

  const updatePostHandler = async(updatePost) => {
    await fetch(END_POINT + "/" + updatePost.id, {
      method: "PATCH",
      body: JSON.stringify(updatePost),
      headers: {
        "content-type" : "application-json"
      }
    })
    setPosts(posts.map(post => post.id === updatePost.id ? updatePost : post));
  }
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Post posts={posts} removePost={postDeleteHandler} />} />
          <Route path="/add" element={<AddPost addPost={addNewPost} />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/post/edit/:id" element={<EditPost updatePost= {updatePostHandler} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App