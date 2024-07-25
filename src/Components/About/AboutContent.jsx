import React from 'react'
import AboutImg from '../../assets/images/image 38.svg'
import SearchImg from '../../assets/images/search.svg'
import List1 from '../../assets/images/list1.svg'
import List2 from '../../assets/images/list2.svg'
import IndustryLeaders from './IndustryLeaders'
import TechnologiesSupport from './TechnologiesSupport'
export default function AboutContent() {
    return (
        <>
            <div className="mainHeroSection">
                <h2>About</h2>
            </div>
            <div className="aboutContent">
                <img src={AboutImg} alt="" />
                <p>
                    Zyntellect is a leading software development company delivering tailor-made digital solutions to businesses worldwide. Our team of 250+ full-stack developers, designers and innovators has designed and developed 100+ digital solutions across industry verticals. As a close-knit team of AI and web3 experts, designers and full-stack developers, we undertake collaborative research and development to create next-gen applications and solutions perfectly suited to the evolving tech space. As a technology pioneer with deep knowledge and expertise in AI, blockchain and other advanced technologies like IoT, Zyntellect believes in helping companies overcome their most complex tech challenges and drive business growth. Our motto, ‘You Dream It: We Build It,’ reflects our business philosophy. From putting flesh on your idea to delivering the expected end product, we do whatever it takes to make your project successful. Having worked with 30+ top fortune 500 companies and created various on-demand solutions, we boast an impressive work portfolio demonstrating our expertise.
                </p>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-md-5 pt-3">
                    <h2>Who we us</h2>
                </div>
                <div className="row flex-lg-row flex-column-reverse">
                    <div className="col-xl-6 col-lg-6 col-md-12 mt-lg-5 mt-2">
                        <div className="industriesTitle p-0 d-flex flex-column justify-content-center h-100">
                            <h2>At Zyntellect, We Continue to Innovate Even After Years of Proven Success</h2>
                            <p>
                                We build future-ready AI and web3 solutions for tech-savvy startups, scale-ups and enterprises using the most advanced technologies.
                            </p>
                            <p className='mt-3'>
                                We are an award-winning software development company with extensive experience building AI and web3-based solutions that cater to diverse industry needs
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 mt-md-0 mt-4">
                        <div className="generativeSec">
                            <div className="row">
                                <div className="col-6 searchCol">
                                    <div className="searchCard">
                                        <img src={SearchImg} alt="" className='searchImg' />
                                    </div>
                                </div>
                                <div className="col-6 listCardCol">
                                    <div className="searchCard listCard">
                                        <img src={List1} alt="" />
                                    </div>
                                    <div className="searchCard listCard mb-0">
                                        <img src={List2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="marginSet">
                <IndustryLeaders />
            </div>
            <div className="marginSet">
                <div className="mainHeading">
                    <h2 style={{ color: '#00245B' }}>How we do it</h2>
                </div>
                <div className="aboutContent mt-sm-5 mt-0">
                    <p className='text-center'>
                        We adopt an agile software development approach that consists of five main steps- strategy workshop, design and prototyping, product development, testing and optimization, deployment and support & maintenance. Our team performs never-ending research about the latest technologies and development strategies, achieving high client satisfaction results on every project.
                    </p>
                </div>
            </div>
            <div className="marginSet">
                <TechnologiesSupport/>
            </div>
        </>
    )
}
