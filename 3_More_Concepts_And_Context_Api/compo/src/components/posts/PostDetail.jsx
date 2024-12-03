import { Component } from "react"
import pumpkinImage from '../../images/pumpkin.jpg';
import { useLocation, Link } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/outline";


class PostDetail extends Component {
    render() {
        const post = this.props.state.state.post;
        return (
            <div className="p-6 bg-gray-100 min-h-screen">
                 <Link to="/"
                    className="flex items-center text-gray-700 hover:text-gray-900 mb-4"
                >
                    <ArrowLeftIcon className="h-5 w-5 mr-2" />
                    Back
                </Link>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={pumpkinImage} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{post.title}</div>
                        <p className="text-gray-700 text-base">
                            {post.desc}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default (props) => {
    const state = useLocation();
    return <PostDetail {...props} state={state} />
};