import React from 'react';
import CreatePostSection from './PostContentComponents/CreatePostSection';
import UserPostSection from './PostContentComponents/UserPostSection';

const PostContent = () => {
    return (
        <div>
            {/* Stories Design Part */}


            {/* Create Post Section Design */}
            <CreatePostSection />

            {/* User Post Section Design */}
            <UserPostSection />
        </div>
    );
};

export default PostContent;