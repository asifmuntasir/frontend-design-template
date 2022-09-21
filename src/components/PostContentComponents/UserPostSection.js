import React from 'react';
import Post1 from './AllPosts/Post1';
import Post2 from './AllPosts/Post2';
import Post3 from './AllPosts/Post3';
import Post4 from './AllPosts/Post4';
import Post5 from './AllPosts/Post5';
import Post6 from './AllPosts/Post6';
import Post7 from './AllPosts/Post7';
import Post8 from './AllPosts/Post8';
import BottomSection from './BottomSection';


const UserPostSection = () => {


    return (
        <>
            {/* All Post Component Start */}

            <Post1 />

            <Post2 />

            <Post3 />

            <Post4 />

            <Post5 />

            <Post6 />

            <Post7 />

            <Post8 />

            {/* All Post Component End */}

            <BottomSection />
        </>
    );
};

export default UserPostSection;