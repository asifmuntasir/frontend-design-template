import React from 'react';
import CommentAction from '../CommentAction';
import DropDown from '../DropDown';
import PostAction from '../PostAction';
import PostHeader from '../PostHeader';
import BusyMan from '../../../assets/images/bussiness-man.png';

const Post8 = () => {

    const post_msg = '😄 Haha';

    return (
        <>
            <div className="container my-3 p-2 bg-white rounded">
                <div className='d-flex align-items-center justify-content-between'>
                    <PostHeader
                        icon={BusyMan}
                        userName={'Vladimir Vladimirovich Putin'}
                        postTime={'8 months ago'} />
                    <div>
                        <DropDown />
                    </div>
                </div>

                {/* Post Details Section Like as Text, Image etc Design Start */}

                <div className='mb-2 p-2'>
                    <div className="container p-0">
                        <p>
                            Designers are responsible artists. Whether it is web designing or development
                            it requires a sense of imagination for looking at the output even before
                            it is published. 😎😎🤓
                        </p>
                    </div>
                </div>
                <ul className='d-flex align-items-center justify-content-between list-unstyled p-0 mb-3 mx-2'>
                    <li>
                        <p className='mb-0 me-2'>
                            👍🏾😆❤️ <span className='ms-2 text-muted' style={{ marginTop: '3px' }}> 3.7k </span>
                        </p>
                    </li>
                    <li>
                        <p className='mb-0 me-2 text-muted cursor-pointer'>5.2k comments</p>
                    </li>
                </ul>

                {/* Post Details Section Like as Text, Image etc Design Start */}


                {/* Like, Comment & Share Section Design Start */}

                <div className='bg-ligth-gray rounded w-100 py-1'>
                    <PostAction msg={post_msg} />
                </div>

                {/* Like, Comment & Share Section Action Start */}

                <CommentAction />

                {/* Like, Comment & Share Section Action End */}



            </div>

        </>
    );
};

export default Post8;