import React from 'react'
import Icon1 from '../../assets/images/icon/icon18.svg'
import Icon2 from '../../assets/images/icon/icon19.svg'
import Icon3 from '../../assets/images/icon/icon20.svg'
import Icon4 from '../../assets/images/icon/icon21.svg'
import Icon5 from '../../assets/images/icon/icon22.svg'
import Icon6 from '../../assets/images/icon/icon23.svg'
import Icon7 from '../../assets/images/icon/icon24.svg'
export default function TechnologiesSupport() {
    return (
        <>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>Technologies We Support</h2>
            </div>
            <div className="technologiesCard">
                <img src={Icon1} alt="" />
                <img src={Icon2} alt="" />
                <img src={Icon3} alt="" />
                <img src={Icon4} alt="" />
                <img src={Icon5} alt="" />
                <img src={Icon6} alt="" />
                <img src={Icon7} alt="" />
            </div>
        </>
    )
}
