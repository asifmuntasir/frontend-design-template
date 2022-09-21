import React from 'react';
import CommentAction from '../CommentAction';
import DropDown from '../DropDown';
import PostAction from '../PostAction';
import PostHeader from '../PostHeader';
import UsreIcon2 from '../../../assets/images/user2.png';

const Post7 = () => {

    return (
        <>
            <div className="container my-3 p-2 bg-white rounded">
                <div className='d-flex align-items-center justify-content-between'>
                    <PostHeader
                        icon={UsreIcon2}
                        userName={'Syed Nadir Ahmed'}
                        postTime={'recent post'} />
                    <div>
                        <DropDown />
                    </div>
                </div>

                {/* Post Details Section Like as Text, Image etc Design Start */}

                <div className='mb-2'>
                    <div className="container p-0">
                        <div className='w-100 h-100 bg-gredient mb-2 p-5'>
                            <h1 className='text-white fs-1 fw-bold'>Click your home icon to refresh the feed!</h1>
                        </div>
                    </div>
                </div>
                <ul className='d-flex align-items-center justify-content-between list-unstyled p-0 mb-3 mx-2'>
                    <li>
                        <p className='mb-0 me-2'>
                            👍🏾😆 <span className='ms-2 text-muted' style={{ marginTop: '3px' }}> 3 </span>
                        </p>
                    </li>
                    <li>
                        <p className='mb-0 me-2 text-muted cursor-pointer'>5 comments</p>
                    </li>
                </ul>

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

export default Post7;