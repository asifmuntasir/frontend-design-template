import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-white d-flex justify-content-around align-items-center p-4">
                <div className="d-flex align-items-center text-success">
                    <span className='fs-4'>
                        &reg;
                    </span>
                    <p className='mb-0'>
                        2022 All Rights Resereved | Asif Muntasir
                    </p>
                </div>
                <div className="d-flex align-items-center justify-content-evenly list-unstyled p-0 mt-3">
                    <li className='mx-1'>
                        <Link className='text-decoration-none social-site p-2 text-success' to='https://github.com/asifmuntasir/' target="_blank">
                            <i class="ri-github-line"></i>
                        </Link>
                    </li>
                    <li className='mx-1'>
                        <Link className='text-decoration-none social-site p-2 text-success' to='https://www.linkedin.com/in/asif-muntasir-shuaib/' target="_blank">
                            <i class="ri-linkedin-line"></i>
                        </Link>
                    </li>
                    <li className='mx-1'>
                        <Link className='text-decoration-none social-site p-2 text-success' to='https://www.facebook.com/muntasir.asif.79' target="_blank">
                            <i class="ri-facebook-line"></i>
                        </Link>
                    </li>
                    <li className='mx-1'>
                        <Link className='text-decoration-none social-site p-2 text-success' to={{ pathname: 'https://asifmuntasir.github.io' }} target="_blank">
                            <i class="ri-window-line"></i>
                        </Link>
                    </li>
                </div>
            </div>
        </>
    );
};

export default Footer;