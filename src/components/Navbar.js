import React from 'react';
import '../assets/nav.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-md d-flex justify-content-evenly">
                <div className="logo">
                    <img src="../assets/images/favicon-96x96.png" alt="pic" />
                </div>
                <form>
                    <i class="ri-search-line search-icon"></i>
                    <input type="search" name="search" id="search" placeholder='Search' />
                </form>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;