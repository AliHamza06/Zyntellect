import React from 'react'
import Ai from '../../assets/images/image 18.svg'
import Palm from '../../assets/images/image 19.svg'
import Liam from '../../assets/images/image 20.svg'
import Claude from '../../assets/images/image 21.svg'
import Dall from '../../assets/images/image 22.svg'
import TopicsSection from './TopicsSection'
export default function ExpertiseIn() {
    return (
        <>
            <div className='expertiseInSection'>
                <div className="mainHeading">
                    <h2 style={{ color: '#00245B' }}>
                        AI Models We Have Expertise In
                    </h2>
                </div>
                <div className='aiModalsCard'>
                    <img src={Ai} alt="" />
                    <img src={Palm} alt="" />
                    <img src={Liam} alt="" />
                    <img src={Claude} alt="" />
                    <img src={Dall} alt="" />
                </div>
                <div className="marginSet">
                    <div className="mainHeading">
                        <h2 style={{ color: '#00245B' }}>
                            Tech Stack Our Data Scientists Utilize
                        </h2>
                    </div>
                    <TopicsSection/>
                </div>
            </div>

        </>
    )
}
