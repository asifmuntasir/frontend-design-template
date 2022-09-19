import React from 'react';
import UserIconMyself from '../../assets/images/user3.png'

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
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item">Action</a></li>
                            <li><a className="dropdown-item">Another action</a></li>
                            <li><a className="dropdown-item">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPostSection;