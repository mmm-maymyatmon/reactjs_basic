import React, { Component } from 'react';
import PostCard from './PostCard';

class Post extends Component {

    render() {
        return (
            <div>
                {
                    this.props.posts.map(post => <PostCard key={post.id} post={post} />)
                }
            </div>
        );
    }
}

export default Post;
