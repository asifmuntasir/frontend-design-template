import React from 'react';
import DropDown from '../DropDown';
import PostHeader from '../PostHeader';
import UserIcon1 from '../../../assets/images/user.png';
import PostAction from '../PostAction';
import CommentAction from '../CommentAction';
import RubyOnRails from '../../../assets/images/rubyonrials.png';


const Post6 = () => {
    const msg = '📖 learning Ruby';
    const post_msg = `❤️ Love`;

    return (
        <>
            <div className="container my-3 p-2 bg-white rounded">
                <div className='d-flex align-items-center justify-content-between'>
                    <PostHeader
                        icon={UserIcon1}
                        userName={'Habib Hussain'}
                        postTime={'5 minutes ago'}
                        msg={msg}
                    />
                    <div>
                        <DropDown />
                    </div>
                </div>

                {/* Post Details Section Like as Text, Image etc Design Start */}

                <div className='p-2 mb-3'>
                    <div className="container p-0">
                        <div className="row">
                            <img src={RubyOnRails} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <ul className='d-flex align-items-center justify-content-between list-unstyled p-0 mb-1 mt-4'>
                        <li>
                            <p className='mb-0 me-2'>
                                👍🏾❤️😮 <span className='ms-2 like-comment' style={{ marginTop: '3px' }}> You and 10 Others </span>
                            </p>
                        </li>
                        <li>
                            <p className='mb-0 me-2 text-muted cursor-pointer'>2 comments</p>
                        </li>
                    </ul>
                </div>

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

export default Post6;