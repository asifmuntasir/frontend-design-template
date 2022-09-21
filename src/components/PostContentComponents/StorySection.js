import React from 'react';
import storyImg1 from '../../assets/images/storyImg1.jpg';
import storyIcon1 from '../../assets/images/storyIcon1.png';
import '../../assets/nav.css';

const StorySection = () => {
    return (
        <>
            <div className='container my-3'>
                <div className="storyReel">
                    {/* story starts */}
                    <div
                        style={{ backgroundImage: `new URL('../../assets/images/storyIcon1.png')` }}
                        className="story"
                    >
                        <img
                            className="user__avatar story__avatar"
                            src={storyIcon1}
                            alt=""
                        />
                        <h4>Somanath Goudar</h4>
                    </div>
                    {/* story ends */}
                </div>
            </div>
        </>
    );
};

export default StorySection;