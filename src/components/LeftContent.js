import React from 'react';

const LeftContent = () => {
    return (
        <div className='my-2 p-3 bg-white rounded'>
            <h5 className='fw-bold'>Explore</h5>
            <ul className='p-0 my-3 list-unstyled'>
                <li className='my-2'>
                    <i class="ri-save-line fs-4 me-3"></i>
                    <span>Saved Posts</span>
                </li>
                <li className='my-2'>
                    <i class="ri-user-3-line fs-4 me-3"></i>
                    <span>People</span>
                </li>
                <li className='my-2'>
                    <i class="ri-group-line fs-4 me-3"></i>
                    <span>Groups</span>
                </li>
                <li className='my-2'>
                    <i class="ri-pages-line fs-4 me-3"></i>
                    <span>Pages</span>
                </li>
                <li className='my-2'>
                    <i class="ri-calendar-line fs-4 me-3"></i>
                    <span>Events</span>
                </li>
            </ul>
        </div>
    );
};

export default LeftContent;