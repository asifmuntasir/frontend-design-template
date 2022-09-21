import React from 'react';
import CommentAction from '../CommentAction';
import DropDown from '../DropDown';
import PostAction from '../PostAction';
import PostHeader from '../PostHeader';
import TeacherIcon from '../../../assets/images/man2.png';
import NestJS_Pic from '../../../assets/images/nestjs.jpeg';

const Post5 = () => {

    const post_msg = `❤️ Love`;

    return (
        <>
            <div className="container my-3 p-2 bg-white rounded">
                <div className='d-flex align-items-center justify-content-between'>
                    <PostHeader
                        icon={TeacherIcon}
                        userName={'Juhaer Elham Fateen'}
                        postTime={'2 days ago'} />
                    <div>
                        <DropDown />
                    </div>
                </div>

                {/* Post Details Section Like as Text, Image etc Design Start */}

                <div className='p-2 mb-3'>
                    <div className="container p-0">
                        <p className='mb-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Natus facilis maxime reprehenderit ut assumenda id animi esse atque
                            cumque at dolorem, sequi minima laboriosam autem totam molestias
                            accusamus voluptates repellat. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Odio optio dolore eaque alias, maxime culpa quidem
                            laboriosam aliquam explicabo animi vel ea reprehenderit dicta.
                            Amet eveniet eos impedit esse aperiam. 💪🏾💪💪🏾
                        </p>
                        <div className="row">
                            <img src={NestJS_Pic} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <ul className='d-flex align-items-center justify-content-between list-unstyled p-0 mb-1 mt-4'>
                        <li>
                            <p className='mb-0 me-2'>
                                👍🏾❤️ <span className='ms-2 like-comment' style={{ marginTop: '3px' }}> You and 40 Others </span>
                            </p>
                        </li>
                        <li>
                            <p className='mb-0 me-2 text-muted cursor-pointer'>50 comments</p>
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

export default Post5;