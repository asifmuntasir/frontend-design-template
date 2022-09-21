import React from 'react';
import GooglePlayIcon from '../assets/images/google-play.png';
import AppleIcon from '../assets/images/ios.png';
import UserIcon from '../assets/images/man.png';

const LeftContent = () => {
    return (
        <div>
            <div className='my-3 p-4 bg-white rounded'>
                <h5 className='fw-bold'>Explore</h5>
                <ul className='p-0 my-3 list-unstyled'>
                    <li className='my-2 d-flex align-items-center'>
                        <i class="ri-save-line fs-4 me-3"></i>
                        <p className='mb-0 cursor-pointer'>Save</p>
                    </li>
                    <li className='my-2 d-flex align-items-center'>
                        <i class="ri-user-3-line fs-4 me-3"></i>
                        <p className='mb-0 cursor-pointer'>People</p>
                    </li>
                    <li className='my-2 d-flex align-items-center'>
                        <i class="ri-group-line fs-4 me-3"></i>
                        <p className='mb-0 cursor-pointer'>Groups</p>
                    </li>
                    <li className='my-2 d-flex align-items-center'>
                        <i class="ri-pages-line fs-4 me-3"></i>
                        <p className='mb-0 cursor-pointer'>Pages</p>
                    </li>
                    <li className='my-2 d-flex align-items-center'>
                        <i class="ri-calendar-line fs-4 me-3"></i>
                        <p className='mb-0 cursor-pointer'>Events</p>
                    </li>
                </ul>
            </div>
            <div className="bg-white rounded p-3">
                <h5 className='fw-bold'>Download App</h5>
                <div className='d-flex app-icon'>
                    <img src={AppleIcon} alt="" />
                    <img src={GooglePlayIcon} alt="" />
                </div>
            </div>
            <div className="my-3 bg-white rounded p-3">
                <h5 className='fw-bold'>Suggested People</h5>
                <div className='d-flex align-items-center mt-4'>
                    <img className='w-25 me-2' src={UserIcon} alt="" />
                    <p className='me-4 mt-3'>Mahin Qureshi</p>
                    <input className='btn border cursor-pointer' type="button" value='Add +' />
                </div>
            </div>
        </div>
    );
};

export default LeftContent;