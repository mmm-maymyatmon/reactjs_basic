import React, { Component } from 'react';
import PostCard from './PostCard';

class Post extends Component {
    remove(id) {
        this.props.removePost(id);
    }
    render() {
        return (
            <div>
                {
                    this.props.posts.map(post => <PostCard key={post.id} post={post} remove={this.remove.bind(this)} />)
                }
            </div>
        );
    }
}

export default Post;
