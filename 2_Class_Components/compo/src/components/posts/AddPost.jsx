import React, { Component } from "react";
import { v4 as uuid } from 'uuid';
import {useNavigate} from 'react-router-dom'

class AddPost extends Component {

    state = {
        title: "",
        desc: ""
    }

    addUser = (e) => {
        e.preventDefault();
        this.props.addPost({id: uuid(), ...this.state});
        this.props.navigate("/");
    }
    render() {
        return (
            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mb-10">
                <h2 className="text-2xl font-semibold text-center mb-4">Create a Post</h2>

                <form onSubmit={ this.addUser } className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter the post title"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            onChange={e => this.setState({ title: e.target.value })} value = {this.state.title}
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            placeholder="Enter the post description"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            rows="4"
                            onChange={e => this.setState({ desc: e.target.value })} value = {this.state.desc}
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        )
    }
}

export default (props) => {
    const navigator = useNavigate();
    return <AddPost { ...props } navigate={navigator} />
}