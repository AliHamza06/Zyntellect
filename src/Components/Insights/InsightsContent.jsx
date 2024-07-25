import React from 'react'
import Generative from '../../assets/images/image 36.svg'
import GenerativeMob from '../../assets/images/insight.svg'
import ListCard from './ListCard'
export default function InsightsContent() {
    return (
        <>
            <div className="mainHeroSection">
                <h2>Insights</h2>
            </div>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-6 col-lg-6 col-md-12 mt-lg-5 mt-4">
                    <div className="industriesTitle p-0 d-flex flex-column justify-content-center h-100">
                        <h2>Generative AI: Use cases, applications, solutions and implementation</h2>
                        <p>
                            Generative AI demonstrates versatile applications across diverse industries, leveraging its capacity to create novel content, simulate human behavior, and generate innovative outputs based on learned patterns.
                        </p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 mt-md-5 mt-4">
                    <div className="generativeSec">
                        <img src={Generative} alt="" className='generativeImg d-sm-block d-none' />
                        <img src={GenerativeMob} alt="" className='generativeImg d-sm-none d-block' />
                    </div>
                </div>
            </div>
            <div className='marginSet'>
                <ListCard />
            </div>
        </>
    )
}
