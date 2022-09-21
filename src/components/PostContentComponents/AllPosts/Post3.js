import React from 'react';
import DropDown from '../DropDown';
import PostAction from '../PostAction';
import PostHeader from '../PostHeader';
import woman from '../../../assets/images/woman.png';
import CommentAction from '../CommentAction';
import ProfilePic from '../../../assets/images/profilePicWoman.jpg';


const Post3 = () => {

    const msg = `update her profile picture`

    return (
        <>
            <div className="container my-3 p-2 bg-white rounded">
                <div className='d-flex align-items-center justify-content-between'>
                    <PostHeader
                        icon={woman}
                        userName={'Quratulain Nawaz'}
                        msg={msg}
                        postTime={'5 days ago'} />
                    <div>
                        <DropDown />
                    </div>
                </div>

                {/* Post Details Section Like as Text, Image etc Design Start */}

                <div className='mb-3'>
                    <div className="container">
                        <div className="row p-0">
                            <img src={ProfilePic} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <p className='d-flex mt-3 text-muted mx-3'> 👍🏾 <span className='ms-2' style={{ marginTop: '3px' }}> 5 </span> </p>
                </div>

                {/* Post Details Section Like as Text, Image etc Design Start */}


                {/* Like, Comment & Share Section Design Start */}

                <div className='bg-ligth-gray rounded w-100 py-1'>
                    <PostAction />
                </div>

                {/* Like, Comment & Share Section Action Start */}

                <CommentAction />

                {/* Like, Comment & Share Section Action End */}



            </div>

        </>
    );
};

export default Post3;