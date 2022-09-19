import React from 'react';
import UserIcon from '../../assets/images/user.png';


const CreatePostSection = () => {
    return (
        <>
            <div className="container my-3 p-4 bg-white rounded">
                <div className='border-bottom'>
                    <img className='me-3 mb-1' src={UserIcon} alt="" />
                    <input className='p-3 border-0 rounded-pill bg-ligth-gray' type="text" placeholder='Create a new post...' />
                </div>
                <ul className='d-flex align-items-center justify-content-evenly list-unstyled p-0 mt-3'>
                    <li className='d-flex align-items-center'>
                        <i className="ri-contrast-line me-1 post-icon"></i>
                        <p className='mb-0'>Background</p>
                    </li>
                    <li className='d-flex align-items-center'>
                        <i className="ri-camera-3-line me-1 post-icon"></i>
                        <p className='mb-0'>Photo/Video</p>
                    </li>
                    <li className='d-flex align-items-center'>
                        <i className="ri-emotion-line me-1 post-icon"></i>
                        <p className='mb-0'>Feeling/Activity</p>
                    </li>
                </ul>
            </div>
            <div className='container p-3 bg-white rounded d-flex align-items-center'>
                <p className='mb-0 text-danger me-3 fw-bold'>Public Post</p>
                <p className='mb-0 fw-bolder'>Friend Post</p>
            </div>
        </>
    );
};

export default CreatePostSection;