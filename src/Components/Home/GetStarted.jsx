import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ContactUs from '../../assets/images/icon/icon4.svg';
import  GetConsultation from '../../assets/images/icon/icon5.svg';
import CostEstimate from '../../assets/images/icon/icon6.svg';
import ProjectKickoff from '../../assets/images/icon/icon7.svg';
import { Pagination } from 'swiper/modules';

const getStartedModels = [
    {
        imgSrc: ContactUs,
        title: 'Contact Us',
        description: 'Fill out the contact form protected by NDA, book a calendar and schedule a Zoom Meeting with our experts.'
    },
    {
        imgSrc:  GetConsultation,
        title: ' Get a Consultation',
        description: 'Get on a call with our team to know the feasibility of your project idea.'
    },
    {
        imgSrc: CostEstimate,
        title: 'Get a Cost Estimate',
        description: 'Based on the project requirements, we share a project proposal with budget and timeline estimates.'
    },
    {
        imgSrc: ProjectKickoff,
        title: 'Project Kickoff',
        description: 'Once the Project is Signed, we bring together a team from a range of disciplines to kick start your project.'
    },
    {
        imgSrc:  GetConsultation,
        title: ' Get a Consultation',
        description: 'Get on a call with our team to know the feasibility of your project idea.'
    },
    
];

export default function GetStarted() {
    return (
        <div className='manageWidth'>
            <div className="mainHeading">
                <h2>Get Started Today</h2>
            </div>
            <div className='swiperContainer'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        280 : {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1300: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {getStartedModels.map((model, index) => (
                        <SwiperSlide key={index}>
                            <div className="engagementCard getSraertedCard">
                                <img src={model.imgSrc} alt={model.title} />
                                <div>
                                    <h3>{model.title}</h3>
                                    <p>{model.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
