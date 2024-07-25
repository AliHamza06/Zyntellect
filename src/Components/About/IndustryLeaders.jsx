import React from 'react';
import JacobJones from '../../assets/images/Leaders/AiAgents1.png'
import CourtneyHenry from '../../assets/images/Leaders/AiAgents2.png'
import JaneCooper from '../../assets/images/Leaders/AiAgents3.png'
import KathrynMurphy from '../../assets/images/Leaders/AiAgents4.png'
import LeslieAlexander from '../../assets/images/Leaders/AiAgents5.png'
import RobertFox from '../../assets/images/Leaders/AiAgents6.png'
import ArleneMcCoy from '../../assets/images/Leaders/AiAgents7.png'
import TheresaWebb from '../../assets/images/Leaders/AiAgents8.png'
// import Board from '../../assets/images/Leaders/board.png'
const teamMembers = [
    { name: 'Jacob Jones', role: 'CEO', image: JacobJones },
    { name: 'Courtney Henry', role: 'Social Media Activist', image: CourtneyHenry },
    { name: 'Jane Cooper', role: 'Finance Manager', image: JaneCooper },
    { name: 'Kathryn Murphy', role: 'Finance Manager', image: KathrynMurphy },
    { name: 'Leslie Alexander', role: 'Finance Manager', image: LeslieAlexander },
    { name: 'Robert Fox', role: 'Finance Manager', image: RobertFox },
    { name: 'Arlene McCoy', role: 'Finance Manager', image: ArleneMcCoy },
    { name: 'Theresa Webb', role: 'Finance Manager', image: TheresaWebb },
];

const TeamCard = ({ name, role, image }) => {
    return (
        <div className="teamLeaderCard">
            <img src={image} alt={name} />
            <div className="teamLeaderCardContent">
                <h4>{name}</h4>
                <p>{role}</p>
            </div>
        </div>
    );
};
export default function IndustryLeaders() {
    return (
        <>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>Our Industry Leaders</h2>
            </div>
            <div className="row">
                {teamMembers.map((member, index) => (
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mt-sm-5 mt-4" key={index}>
                        <TeamCard name={member.name} role={member.role} image={member.image} />
                    </div>
                ))}
            </div>
        </>
    )
}

