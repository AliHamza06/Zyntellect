import React from 'react'
import Logo from '../../assets/images/logo.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
export default function Footer() {
    return (
        <div className='footerSection'>
                <div className="manageWidth">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-8">
                            <div className="footerLogoContent">
                                <img src={Logo} alt="Logo" />
                                <p>
                                    Zyntellect build cutting-edge AI solutions <br /> for startups and enterprises
                                </p>
                                <div className="socialIcons">
                                    <IconButton>
                                        <TwitterIcon />
                                    </IconButton>
                                    <IconButton>
                                        <InstagramIcon />
                                    </IconButton>
                                    <IconButton>
                                        <GoogleIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 mt-4">
                            <div className="footerHref">
                                <h3>Company</h3>
                                <ul>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Jobs</a>
                                    </li>
                                    <li>
                                        <a href="#">Contacts</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-8 mt-4">
                            <div className="footerHref">
                                <h3>Services</h3>
                                <ul>
                                    <li>
                                        <a href="#">Software Development</a>
                                    </li>
                                    <li>
                                        <a href="#">AI Development </a>
                                    </li>
                                    <li>
                                        <a href="#">Block Chain Development</a>
                                    </li>
                                    <li>
                                        <a href="#">Software Consulting</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-5 col-sm-4 mt-4">
                            <div className="footerHref">
                                <h3>Our News</h3>
                                <ul>
                                    <li>
                                        <a href="#">Latest news</a>
                                    </li>
                                    <li>
                                        <a href="#">Insights</a>
                                    </li>
                                    <li>
                                        <a href="#">Compaigns</a>
                                    </li>
                                    <li>
                                        <a href="#">Events</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyRightSection">
                        <p>© All rights reserved. Made by <strong>Zyntellect</strong></p>
                        <div className='termsSec'>
                            <a href="#">Support</a>
                            <a href="#">Contacts</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}
