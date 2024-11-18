import React, { Component } from 'react';
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import pumpkinImage from '../../images/pumpkin.jpg';
import { Link } from "react-router-dom"

class PostCard extends Component {
    delete() {
        this.props.remove(this.props.post.id);
    }
    render() {
        let post = this.props.post;
        return (
            <div className="card p-4 border rounded shadow-md sm:flex block justify-end items-center w-full m-auto">
                <div className='sm:w-1/4 w-full'>
                    <img
                        src={ pumpkinImage }
                        alt="profile"
                        className="h-16 w-16 m-auto sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full object-cover"
                    />
                </div>
                <div className="sm:w-1/4 w-full mb-4 text-center">
                    <p className="font-bold text-lg">{ post.title }</p>
                    <p className="text-gray-600">{ post.desc }</p>
                </div>
                <div className="sm:w-2/4 w-full justify-center flex gap-3">
                    <Link to={`/post/${post.id}`} state={{ post: post }}
                        className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-500 rounded hover:bg-blue-200"
                        title="View Post"
                    >
                        <EyeIcon className="h-5 w-5" />
                        <span>View</span>
                    </Link>
                    <button
                        className="flex items-center gap-2 px-3 py-2 bg-green-100 text-green-500 rounded hover:bg-green-200"
                        title="Edit Post"
                    >
                        <PencilSquareIcon className="h-5 w-5" />
                        <span>Edit</span>
                    </button>
                    <button
                        className="flex items-center gap-2 px-3 py-2 bg-red-100 text-red-500 rounded hover:bg-red-200"
                        title="Delete Post" onClick={this.delete.bind(this)}
                    >
                        <TrashIcon className="h-5 w-5" />
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default PostCard;