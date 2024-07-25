import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { IconButton } from '@mui/material';
import ProfileImg from '../../assets/images/left pic.svg'
export default function NewsLetter() {
    return (
        <div className='manageWidth'>
            <div className="row subscribe-section">
                <div className="col-lg-6 col-md-12 col-sm-12 newsImgCol">
                <div className="image-container">
                    <img
                        src={ProfileImg}
                        alt="Profile"
                        className="profile-image"
                    />
                </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 newsContentCol">
                <div className="subscription-container">
                    <h2>Subscribe to newsletter</h2>
                    <p>Get new features unlocked</p>
                    <div className="input-container">
                        <input type="email" placeholder="Enter your email" />
                        <IconButton className="send-button">
                            <SendOutlinedIcon />
                        </IconButton>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
