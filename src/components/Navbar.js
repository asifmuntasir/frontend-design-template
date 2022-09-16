import React from 'react';
import logo from '../assets/images/Adwords.gif'
import '../assets/nav.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg m-0 p-0 pt-2 navbar-light bg-light">
            <div className="container-md d-flex justify-content-evenly">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <form>
                    <i class="ri-search-line search-icon"></i>
                    <input type="search" name="search" id="search" placeholder='Search' />
                </form>
                <ul class="nav">
                    <li class="nav-item">
                        <i class="ri-home-8-line pb-3 nav-link fs-5 text-dark nav-icon active"></i>
                        {/* <a class="nav-link active" aria-current="page" href="#">Active</a> */}
                    </li>
                    <li class="nav-item">
                        <i class="ri-team-line nav-link pb-3 fs-5 text-dark nav-icon"></i>
                        {/* <a class="nav-link" href="https://asifmuntasir.github.io/">Link</a> */}
                    </li>
                    <li class="nav-item">
                        <i class="ri-notification-3-line nav-link pb-3 fs-5 text-dark nav-icon"></i>
                        {/* <a class="nav-link" href="https://github.com/asifmuntasir/">Link</a> */}
                    </li>
                    <li class="nav-item">
                        <i class="ri-chat-voice-line nav-link pb-3 fs-5 text-dark nav-icon"></i>
                        {/* <a class="nav-link" href="https://github.com/asifmuntasir/">Link</a> */}
                    </li>
                    <li class="nav-item mx-2 d-flex justify-content-center align-items-center">
                        <i class="ri-account-circle-fill pb-3 me-1 mt-1 fs-5 text-dark"></i>
                        <span className='me-1 user-name fw-bold'>Asif Muntasir Shauib</span>
                        <i class="ri-arrow-down-s-line arrow-icon fs-5"></i>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;