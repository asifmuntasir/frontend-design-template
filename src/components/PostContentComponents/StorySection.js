import React from 'react';
import storyImg1 from '../../assets/images/storyImg1.jpg';
import storyImg2 from '../../assets/images/storyImg2.jpg';
import myselfImg from '../../assets/images/myselfImg.jpg';
import woman from '../../assets/images/woman.png';
import UserIcon6 from '../../assets/images/user6.png';
import '../../assets/story.css';

const StorySection = () => {
    return (
        <>
            <div className='container p-0 mt-2'>
                <div className="storyReel">
                    {/* story starts */}
                    <div
                        style={{ backgroundImage: `url(${myselfImg})` }}
                        className="story"
                    >
                        <div className="create__story">
                            <p className='text-center m-4 fw-bold'>Create Story</p>
                        </div>
                        <h5 className='create__icon'><i class="ri-add-line"></i></h5>
                    </div>
                    {/* story ends */}

                    {/* story starts */}
                    <div
                        style={{ backgroundImage: `url(${storyImg1})` }}
                        className="story"
                    >
                        <img
                            className="user__avatar story__avatar"
                            src={UserIcon6}
                            alt=""
                        />
                        <h5>Gulam Kibria Chowdhury</h5>
                    </div>
                    {/* story ends */}

                    {/* story starts */}
                    <div
                        style={{ backgroundImage: `url(${storyImg2})` }}
                        className="story"
                    >
                        <img
                            className="user__avatar story__avatar"
                            src={woman}
                            alt=""
                        />
                        <h5>Quratulain Nawaz</h5>
                    </div>
                    {/* story ends */}
                </div>
            </div>
        </>
    );
};

export default StorySection;