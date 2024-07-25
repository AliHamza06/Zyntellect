import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import DevelopmentTeam from '../../assets/images/icon/icon1.svg';
import TeamExtension from '../../assets/images/icon/icon2.svg';
import ProjectModel from '../../assets/images/icon/icon3.svg';
import { Pagination, Autoplay } from 'swiper/modules';

const engagementModels = [
    {
        imgSrc: DevelopmentTeam,
        title: 'Dedicated Development Team',
        description: 'Our developers leverage cutting-edge cognitive technologies'
    },
    {
        imgSrc: TeamExtension,
        title: 'Team Extension',
        description: 'Our team extension model is designed to assist clients seeking'
    },
    {
        imgSrc: ProjectModel,
        title: 'Project-based Model',
        description: 'Our project-oriented approach, supported by our team of software development'
    },
    {
        imgSrc: DevelopmentTeam,
        title: 'Dedicated Development Team',
        description: 'Our developers leverage cutting-edge cognitive technologies'
    },
];

export default function OurEngagement() {
    return (
        <div className='manageWidth'>
            <div className="mainHeading">
                <h2>Our Engagement Models</h2>
            </div>
            <div className='swiperContainer'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
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
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {engagementModels.map((model, index) => (
                        <SwiperSlide key={index}>
                            <div className="engagementCard">
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
