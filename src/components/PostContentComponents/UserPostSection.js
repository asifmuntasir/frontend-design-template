import React from 'react';
import UserIconMyself from '../../assets/images/user3.png'
import DropDown from './DropDown';
import UserIcon4 from '../../assets/images/user4.png';

const UserPostSection = () => {
    return (
        <>
            <div className="container my-3 p-2 bg-white rounded">
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex p-2'>
                        <img className='me-3' src={UserIconMyself} alt="" />
                        <div className='mt-2'>
                            <h5 className='mb-0'>Asif Muntasir Shuaib</h5>
                            <ul className='d-flex align-items-center text-muted list-unstyled p-0 m-0 mb-2'>
                                <li className='d-flex align-items-center'>
                                    <p className='mb-0 me-2'>30 mins ago</p>
                                    <i className="ri-earth-line public-post-icon"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <DropDown />
                    </div>
                </div>
                <div className='p-2'>
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
                        <p><i class="ri-scissors-line bg-ligth-gray rounded-circle p-1"></i></p>
                    </div>
                    <div className="form-check my-2">
                        <input className="form-check-input mt-4" type="checkbox" value="" id="flexCheckChecked" />
                        <div className='bg-ligth-gray rounded ms-1 py-2 px-3'>
                            <label className="form-check-label fs-6" for="flexCheckDefault">
                                Added by you
                            </label>
                            <p className='mb-0'>Cricket</p>
                        </div>
                    </div>
                    <div className="form-check my-2">
                        <input className="form-check-input mt-4" type="checkbox" value="" id="flexCheckChecked" />
                        <div className='bg-ligth-gray rounded ms-1 py-2 px-3'>
                            <label className="form-check-label fs-6" for="flexCheckDefault">
                                Added by you
                            </label>
                            <p className='mb-0'>Cricket</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPostSection;