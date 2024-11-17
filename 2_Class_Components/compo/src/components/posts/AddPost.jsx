import React, { Component } from "react";
import { v4 as uuid } from 'uuid';

class AddPost extends Component {

    state = {
        title: "",
        desc: ""
    }

    addUser = (e) => {
        e.preventDefault();
        this.props.addPost({id: uuid(), ...this.state })
    }
    render() {
        return (
            <div class="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mb-10">
                <h2 class="text-2xl font-semibold text-center mb-4">Create a Post</h2>

                <form onSubmit={ this.addUser } class="space-y-6">
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter the post title"
                            class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            onChange={e => this.setState({ title: e.target.value })} value = {this.state.title}
                        />
                    </div>

                    <div>
                        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            placeholder="Enter the post description"
                            class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            rows="4"
                            onChange={e => this.setState({ desc: e.target.value })} value = {this.state.desc}
                        ></textarea>
                    </div>

                    <div class="text-center">
                        <button
                            type="submit"
                            class="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        )
    }
}

export default AddPost;