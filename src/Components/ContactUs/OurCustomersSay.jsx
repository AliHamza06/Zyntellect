import React from 'react'
import Machine from '../../assets/images/icon/say1.png';
import DataAnalysis from '../../assets/images/icon/say2.png';
import DomainSpecific from '../../assets/images/icon/say3.png';
import AISolutions from '../../assets/images/icon/say4.png';
import DomainSpecific2 from '../../assets/images/icon/say5.png';
import AISolutions2 from '../../assets/images/icon/say6.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ourCustomers = [
    {
        title: "Zyntellect crafted an exceptional mobile application tailored to our needs, and we are eager for further collaboration",
        description: "To bring out the exceptional user experience of the speakers through a mobile app, we were looking for a tech company that understood our needs and suggested recommendations on top of that to create a clean mobile app. We exactly got that. Our association with Zyntellect was extremely rewarding; we continue to work with Zyntellect on more audio products.",
        img: Machine,
        userName : 'Konstantin Schuller',
        userDesc : 'Chief Technology Officer at ETON',
    },
    {
        title: "Zyntellect efficiently steered our iCruise app’s multi-platform expansion",
        description: "Well, working with Zyntellect on our iCruise app was delightful. From the first meeting to the launch of the app, the development team was very forthcoming and active. They laid in front of us a very clear and realistic roadmap to ensure that everyone was on the same page. We started with an iPhone app, and now we have built apps on Android, iPad, Tablet, Kindle and the Web with Zyntellect.",
        img: DataAnalysis,
        userName : 'Uf Tukel',
        userDesc : 'Co-Founder iCruise',
    },
    {
        title: "Zyntellect delivered what they proposed, thanks to their expertise in application development",
        description: "Zyntellect knows its craft and the teams are experts at iPhone and Android app development. They’re highly focused and they delivered what they proposed.",
        img: DomainSpecific,
        userName : 'James Unwin',
        userDesc : 'Director of O’Reilly Auto Parts',
    },
    {
        title: "Zyntellect’s responsive and flexible approach significantly enhanced our app with valuable features",
        description: "Zyntellect was flexible in adding smaller features along the way. We found something that might be useful to add to the app, and they responded and acted quickly. Their process worked well.",
        img: AISolutions,
        userName : 'Roland Busch',
        userDesc : 'CEO of Siemens',
    },
    {
        title: "I have recommended Zyntellect’s services many times for their unmatched commitment and consistency",
        description: "I came to Zyntellect because of their reputation in the software development space. When we expanded the project to incorporate blockchain not only did they not flinch, they got more enthused. They have been stellar at every step of the way working towards solutions that worked straight to the heart of the idea on a micro and macro sense. I have already recommended them many times and I will continue to do so. The members of Zyntellect have always promptly returned my calls or emails irrespective of the time. I have found them to be consistently available and committed to addressing my needs.",
        img: DomainSpecific2,
        userName : 'Matthew Rosen',
        userDesc : 'CEO at Tracerx',
    },
    {
        title: "I recommend Zyntellect’s services to any business seeking a reliable partner to turn their ideas into reality",
        description: "Ensuring the scalability and security of Fanblock was crucial for us, and Zyntellect met our expectations in delivering on these fronts. Their dedication, passion, and unwavering commitment played a pivotal role in bringing our innovative concept to life. Amid the fast-paced nature of our work, the team’s collaborative spirit and insightful discussions propelled us forward. I recommend their services to any business seeking a reliable partner to turn their ideas into reality.",
        img: AISolutions2,
        userName : 'Johan Greeff',
        userDesc : 'CEO and Founder at FANBLOCK',
    }
];

export default function OurCustomersSay() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>What Our Customers Say</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourCustomers.map((ourCustomer, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard customersSayCard">
                                <img src={ourCustomer.img} alt={ourCustomer.title} />
                                <h4>{ourCustomer.title}</h4>
                                <p>{ourCustomer.description}</p>
                                <div className='userCont'>
                                    <h5>{ourCustomer.userName}</h5>
                                    <h6>{ourCustomer.userDesc}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
