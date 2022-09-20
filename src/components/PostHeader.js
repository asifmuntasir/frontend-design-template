import React from 'react';

const PostHeader = ({ icon, postTime }) => {
    return (
        <div className='d-flex p-2'>
            <img className='me-3' src={icon} alt="" />
            <div className='mt-2'>
                <h5 className='mb-0'>Asif Muntasir Shuaib</h5>
                <ul className='d-flex align-items-center text-muted list-unstyled p-0 m-0 mb-2'>
                    <li className='d-flex align-items-center'>
                        <p className='mb-0 me-2'>{postTime}</p>
                        <i className="ri-earth-line public-post-icon"></i>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PostHeader;