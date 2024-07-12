import { Button } from '@mui/material'
import React from 'react'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
export default function GetFree() {
    return (
        <div className='getFreeSec'>
            <div className="manageWidth w-100">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <h2 className='getFreeTxt'>Get a free consultation</h2>
                    </div>
                    <div className="col-lg-7 col-md-12 mt-lg-0 mt-3">
                        <div className='getFreeForm'>
                            <div className='getFreeInput'>
                                <input type="text" className='form-control' placeholder="Your Email" />
                                <Button>Book a Consultation</Button>
                            </div>
                            <div className='callUsSec'>
                                <LocalPhoneOutlinedIcon />
                                <p>Or call us <span>+91 9443330401</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
