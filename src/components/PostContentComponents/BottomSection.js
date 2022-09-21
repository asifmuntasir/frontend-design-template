import React from 'react';

const BottomSection = () => {
    return (
        <>
            <div className="container text-center my-3 px-2 py-5 bg-white rounded">
                <h1 className='fw-bold' style={{ color: 'black' }}>There are No Posts Found!</h1>
                <p className='text-muted'>Keep checking back later or refresh to get more feeds!</p>
            </div>
        </>
    );
};

export default BottomSection;