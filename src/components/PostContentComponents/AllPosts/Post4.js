import React from 'react';
import PostHeader from '../PostHeader';
import UserIcon7 from '../../../assets/images/user7.png';
import DropDown from '../DropDown';
import PostAction from '../PostAction';
import CommentAction from '../CommentAction';

const Post4 = () => {
    const msg = '📣 BLACK BUSINESS OWNER';

    return (
        <>
            <div className="container my-3 p-2 bg-white rounded">
                <div className='d-flex align-items-center justify-content-between'>
                    <PostHeader
                        icon={UserIcon7}
                        userName={'Deepro Asiful Hai'}
                        msg={msg}
                        postTime={'5 days ago'} />
                    <div>
                        <DropDown />
                    </div>
                </div>

                {/* Post Details Section Like as Text, Image etc Design Start */}

                <div className='p-2 mb-3'>
                    <div className="container p-0">
                        <p className='mb-5'>Don't Hesitate to ask me a questions!</p>
                    </div>
                    <ul className='d-flex align-items-center justify-content-between list-unstyled p-0 mb-1 mt-4'>
                        <li>
                            <p className='mb-0 me-2'>
                                👍🏾❤️ <span className='mx-2 text-muted' style={{ marginTop: '3px' }}> 15 </span>
                            </p>
                        </li>
                        <li>
                            <p className='mb-0 me-2 text-muted'>50 comments</p>
                        </li>
                    </ul>
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

export default Post4;