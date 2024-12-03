import { Component } from "react";
import { useLocation, useNavigate  } from 'react-router-dom';

class EditPost extends Component {
    constructor(props){
        super(props);
        const post = this.props.state.state.post;
        this.state = {
            id: post.id,
            title: post.title,
            desc: post.desc
        }
        // console.log(this.props)
    }
    updatePost(e){
        e.preventDefault();
        this.props.updatePost(this.state);
        this.props.navigate("/")
    }
    render() {
        return (
            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mb-10">
                <h2 className="text-2xl font-semibold text-center mb-4">Edit Post</h2>

                <form onSubmit={ this.updatePost.bind(this) } className="space-y-6">
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default (props) => {
    let navigate = useNavigate();
    let state = useLocation();
    return <EditPost {...props} navigate={navigate} state={state} />
}