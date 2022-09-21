import React from 'react';
import UserIconMyself from '../../assets/images/user3.png';
import DropDown from './DropDown';
import UserIcon4 from '../../assets/images/user4.png';
import UserIcon5 from '../../assets/images/user5.png';
import UserIcon6 from '../../assets/images/user6.png';
import CommentImg from '../../assets/images/small-business1.jpg';
import NatureImg1 from '../../assets/images/nature1.jpg';
import NatureImg2 from '../../assets/images/nature2.jpg';
import NatureImg3 from '../../assets/images/nature3.jpg';
import NatureImg4 from '../../assets/images/nature4.jpg';
import NatureImg5 from '../../assets/images/nature5.jpg';
import PostHeader from '../PostHeader';
import PostAction from './PostAction';


const UserPostSection = () => {

    const msg = `😄 is feeling Awesome`;
    const post_msg = `❤️ Love`;

    return (
        <>
            {/* Post Design Start */}

            <div className="container my-3 p-2 bg-white rounded">
                <div className='d-flex align-items-center justify-content-between'>
                    <PostHeader
                        icon={UserIconMyself}
                        userName={'Asif Muntasir Shuaib'}
                        postTime={'30 mins ago'}
                    />
                    <div>
                        <DropDown />
                    </div>
                </div>

                {/* Post Details Section Like as Text, Image etc Design Start */}

                <div className='p-2 mb-3'>
                    <p className='ms-3'>your favourite game</p>
                    <div className="form-check my-2 d-flex align-items-center justify-content-between">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <div className='bg-ligth-gray rounded ms-2 py-2 px-3 me-2'>
                            <label className="form-check-label fs-6" for="flexCheckDefault">
                                Added by you
                            </label>
                            <p className='mb-0'>Cricket</p>
                        </div>
                        <div className='text-center'>
                            <img src={UserIcon4} alt="" />
                            <p className='font-size'>1 vote</p>
                        </div>
                        <p><i class="ri-scissors-line bg-ligth-gray rounded-circle p-1 cursor-pointer"></i></p>
                    </div>
                    <div className="form-check my-2">
                        <input className="form-check-input mt-4" type="checkbox" value="" id="flexCheckChecked" />
                        <div className='bg-ligth-gray rounded ms-1 py-2 px-3'>
                            <label className="form-check-label fs-6" for="flexCheckDefault">
                                Added by you
                            </label>
                            <p className='mb-0'>Football</p>
                        </div>
                    </div>
                    <div className="form-check my-2">
                        <input className="form-check-input mt-4" type="checkbox" value="" id="flexCheckChecked" />
                        <div className='bg-ligth-gray rounded ms-1 py-2 px-3'>
                            <label className="form-check-label fs-6" for="flexCheckDefault">
                                Added by you
                            </label>
                            <p className='mb-0'>Swimming</p>
                        </div>
                    </div>
                    <p className='d-flex flex-row-reverse mt-3 text-muted'>1 Comment</p>
                </div>

                {/* Post Details Section Like as Text, Image etc Design Start */}

                {/* Like, Comment & Share Section Design Start */}

                <div className='bg-ligth-gray rounded w-100 py-1'>
                    <PostAction />
                </div>

                {/* Like, Comment & Share Section Design End */}

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
                        <i class="ri-send-plane-fill comment-icon"></i>
                    </div>
                </div>

                <div className='px-1'>
                    <div className='mb-2'>
                        <img className='me-3 ms-2 pb-1' src={UserIcon5} alt="" />
                        <strong className='bg-ligth-gray py-2 px-3 rounded-pill'>Adnan Chowdhury</strong>
                    </div>
                    <div className='d-flex align-items-center justify-content-between comment-img'>
                        <img src={CommentImg} alt="" />
                        <span className='ms-4 fw-bold fs-4 text-muted cursor-pointer'>...</span>
                    </div>
                    <ul className='d-flex align-items-center list-unstyled text-muted mt-2 ms-4'>
                        <li className='all-cursor p-2 mx-2'>
                            Like
                        </li>
                        <li className='all-cursor p-2 mx-2'>
                            Reply
                        </li>
                        <li className='my-2 mx-2'>
                            - 3 hours ago
                        </li>
                    </ul>
                    <div className='ms-5 d-flex custom-width'>
                        <img className='me-2 pb-1' src={UserIcon5} alt="" />
                        <p className='bg-ligth-gray py-2 px-3 rounded-pill me-2'>
                            <strong>Adnan Chowdhury</strong>
                            <br />
                            <span>nope</span>
                        </p>
                        <strong className='fs-4 text-muted cursor-pointer'>...</strong>
                    </div>
                    <ul className='d-flex align-items-center list-unstyled text-muted ms-4'>
                        <li className='all-cursor p-2 ms-5'>
                            Like
                        </li>
                        <li className='my-2 mx-2'>
                            - 15 minutes ago
                        </li>
                    </ul>
                    <div className='d-flex align-items-center justify-content-around mt-1 mb-3 reply-comment-width'>
                        <img className='me-1' src={UserIcon5} alt="" />
                        <div className='fs-5 me-1'>
                            <i class="ri-emotion-happy-line all-cursor"></i>
                            <i class="ri-attachment-2 all-cursor"></i>
                            <i class="ri-file-gif-line all-cursor"></i>
                        </div>
                        <div className='w-75 me-1'>
                            <input className='w-100 reply-field' type="text" placeholder='Write a comment' />
                            <i class="ri-send-plane-fill reply-icon"></i>
                        </div>
                    </div>
                </div>
                {/* Comment Section Design End */}
            </div>

            {/* Post Design End */}


            {/* Post Design End */}
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


            </div>
        </>
    );
};

export default UserPostSection;