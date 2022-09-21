import React from 'react';
import UserIcon6 from '../../../assets/images/user6.png';
import NatureImg1 from '../../../assets/images/nature1.jpg';
import NatureImg2 from '../../../assets/images/nature2.jpg';
import NatureImg3 from '../../../assets/images/nature3.jpg';
import NatureImg4 from '../../../assets/images/nature4.jpg';
import NatureImg5 from '../../../assets/images/nature5.jpg';
import PostHeader from '../PostHeader';
import DropDown from '../DropDown';
import PostAction from '../PostAction';
import CommentAction from '../CommentAction';



const Post2 = () => {

    const msg = `😄 is feeling Awesome`;
    const post_msg = `❤️ Love`;

    return (
        <>
            <div className="container my-3 p-2 bg-white rounded">
                <div className='d-flex align-items-center justify-content-between'>
                    <PostHeader
                        icon={UserIcon6}
                        userName={'Gulam Kibria Chowdhury'}
                        msg={msg}
                        postTime={'1 hour ago'} />
                    <div>
                        <DropDown />
                    </div>
                </div>

                {/* Post Details Section Like as Text, Image etc Design Start */}

                <div className='p-2 mb-3'>
                    <p className='ms-3'>Have a good day !</p>
                    <div className="container">
                        <div className="row p-0">
                            <div className="col-6 px-1">
                                <img className='img-fluid h-100 ' src={NatureImg1} alt="" />
                            </div>
                            <div className="col-6 px-1">
                                <img className='img-fluid h-100' src={NatureImg2} alt="" />
                            </div>
                        </div>
                        <div className="row mt-1 p-0">
                            <div className="col-4 px-1">
                                <img src={NatureImg3} alt="" className="img-fluid h-100 w-100" />
                            </div>
                            <div className="col-4 px-1">
                                <img src={NatureImg4} alt="" className="img-fluid h-100 w-100" />
                            </div>
                            <div className="col-4 px-1">
                                <img src={NatureImg5} alt="" className="img-fluid h-100 w-100" />
                            </div>
                        </div>
                    </div>
                    <p className='d-flex mt-3 text-muted ms-3'> ❤️ You </p>
                </div>

                {/* Post Details Section Like as Text, Image etc Design Start */}


                {/* Like, Comment & Share Section Design Start */}

                <div className='bg-ligth-gray rounded w-100 py-1'>
                    <PostAction msg={post_msg} />
                </div>

                {/* Like, Comment & Share Section Design End */}

                {/* Like, Comment & Share Section Action Start */}

                <CommentAction />

                {/* Like, Comment & Share Section Action End */}

            </div>

        </>
    );
};

export default Post2;