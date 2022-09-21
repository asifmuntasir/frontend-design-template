import React from 'react';
import UserIcon5 from '../../assets/images/user5.png';

const CommentAction = () => {
    return (
        <>
            {/* Comment Section Design Start */}

            <div className='d-flex align-items-center justify-content-around my-4'>
                <img src={UserIcon5} alt="" />
                <div className='fs-5'>
                    <i class="ri-emotion-happy-line all-cursor"></i>
                    <i class="ri-attachment-2 all-cursor"></i>
                    <i class="ri-file-gif-line all-cursor"></i>
                </div>
                <div className='w-75'>
                    <input className='w-100 comment-field' type="text" placeholder='Write a comment' />
                    {/* <i class="ri-send-plane-fill comment-icon"></i> */}
                </div>
            </div>

            {/* Comment Section Design End */}
        </>
    );
};

export default CommentAction;