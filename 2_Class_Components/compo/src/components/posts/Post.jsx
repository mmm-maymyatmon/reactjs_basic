import React, { Component } from 'react';
import PostCard from './PostCard';
import { Link } from 'react-router-dom'

class Post extends Component {
    remove(id) {
        this.props.removePost(id);
    }
    render() {
        return (
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-700">Posts</h1>
                    <Link to="/add" className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                        Add
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </Link>
                </div>
                {
                    this.props.posts.map(post => <PostCard key={post.id} post={post} remove={this.remove.bind(this)} />)
                }
            </div>
        );
    }
}

export default Post;
