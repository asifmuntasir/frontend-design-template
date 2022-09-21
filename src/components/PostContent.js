import React from 'react';
import CreatePostSection from './PostContentComponents/CreatePostSection';
import StorySection from './PostContentComponents/StorySection';
import UserPostSection from './PostContentComponents/UserPostSection';

const PostContent = () => {
    return (
        <div>
            {/* Stories Design Part */}
            <StorySection />

            {/* Create Post Section Design */}
            <CreatePostSection />

            {/* User Post Section Design */}
            <UserPostSection />
        </div>
    );
};

export default PostContent;