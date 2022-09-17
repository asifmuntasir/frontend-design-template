import React from 'react';
import LeftContent from './LeftContent';
import PostContent from './PostContent';
import RightContent from './RightContent';

const Layout = () => {
    return (
        <div className='container-md'>
            <div className="row">
                <div className="col-3">
                    <LeftContent />
                </div>
                <div className="col-6">
                    <PostContent />
                </div>
                <div className="col-3">
                    <RightContent />
                </div>
            </div>
        </div>
    );
};

export default Layout;