import React from 'react';

const PostAction = ({ msg }) => {
    return (
        <ul className='d-flex align-items-center justify-content-evenly list-unstyled p-0 my-2'>
            <li className='d-flex align-items-center all-cursor py-1 px-2'>
                {
                    msg ? <i class="ri-thumb-up-line me-1 post-icon d-none"></i>
                        :
                        <i class="ri-thumb-up-line me-1 post-icon"></i>
                }
                {/* <i class="ri-thumb-up-line me-1 post-icon"></i> */}
                {
                    msg ? <p className='mb-0 text-danger fw-bold'>{msg}</p>
                        :
                        <p className='mb-0'>Like</p>
                }
                {/* <p className='mb-0'>Like</p> */}
            </li>
            <li className='d-flex align-items-center all-cursor py-1 px-2'>
                <i class="ri-chat-4-line me-1 post-icon"></i>
                <p className='mb-0'>Comment</p>
            </li>
            <li className='d-flex align-items-center all-cursor py-1 px-2'>
                <i class="ri-share-forward-line me-1 post-icon"></i>
                <p className='mb-0'>Share</p>
            </li>
        </ul>
    );
};

export default PostAction;