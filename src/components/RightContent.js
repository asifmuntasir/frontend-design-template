import React from 'react';
import UserIcon from '../assets/images/user.png';
import UserIconDuplicate from '../assets/images/user2.png';
import UserIconWoman from '../assets/images/woman.png';

const RightContent = () => {
    return (
        <div>
            <div className='my-3 p-4 bg-white rounded'>
                <h5 className='fw-bold'>You Might Like</h5>
                <div className='d-flex align-items-center mt-5'>
                    <img className='w-25 me-3' src={UserIcon} alt="" />
                    <div className='d-flex flex-column mt-3'>
                        <p className='mb-0 fw-bolder'>Tufahel Mia</p>
                        <p>mtufahel123</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-4'>
                    <input className='btn border cursor-pointer text-muted px-4' type="button" value='Ignore' />
                    <input className='btn border cursor-pointer btn-primary px-4' type="button" value='Follow' />
                </div>
            </div>
            <div className="my-3 bg-white rounded p-4">
                <h5 className='fw-bold'>Your Friends</h5>
                <form className='mt-5'>
                    {/* <i class="ri-search-line friend-search-icon"></i> */}
                    <input className='w-100 position-relative' placeholder='✍️' type="search" name="search" id="search" />
                </form>
                <div className='d-flex align-items-center mt-4'>
                    <img className='w-25 me-3' src={UserIcon} alt="" />
                    <p className='me-4 mt-3'>admin</p>
                </div>
                <div className='d-flex align-items-center mt-4'>
                    <img className='w-25 me-3' src={UserIconDuplicate} alt="" />
                    <p className='me-4 mt-3'>Zahid Mahmud Emon</p>
                </div>
                <div className='d-flex align-items-center mt-4'>
                    <img className='w-25 me-3' src={UserIconWoman} alt="" />
                    <p className='me-4 mt-3'>Sheikh Shanjida Sharmeen</p>
                </div>
            </div>
        </div>
    );
};

export default RightContent;