import React from 'react';
const typesSolutions = [
    {
        title: "Accounting SaaS Solutions",
        description: "We specialize in building efficient and cost-effective accounting SaaS solutions tailored to businesses’ distinctive needs. Our platforms streamline financial tasks like invoicing, expense management, and financial reporting to enhance collaboration and gain real-time insights for informed decision-making.",
    },
    {
        title: "Content Management System (CMS)",
        description: "We develop robust content management systems based on the SaaS model that facilitate content generation and management. With our solutions, users can effortlessly manage digital content, improve workflow efficiency, and create engaging web experiences, all while minimizing technical complexity.",

    },
    {
        title: "Enterprise Resource Planning (ERP) SaaS",
        description: "We specialize in developing comprehensive ERP SaaS solutions that streamline processes across finance, logistics, manufacturing, and HR, fostering data-driven decision-making. With our solutions, organizations can streamline inventory and order management, optimize resource allocation, and gain holistic visibility into business processes.",
    },
    {
        title: "Project Management SaaS Solutions",
        description: "We design intuitive and feature-rich project management SaaS solutions to help organizations plan, execute and monitor projects. Our solutions empower teams to collaborate seamlessly, track project progress and key performance metrics, and achieve project goals efficiently, fostering productivity and innovation across the organization.",

    }
];

export default function TypesSolution() {
    return (
        <>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Types of SaaS Solutions We Develop
                </h2>
            </div>
            <div className="row mt-sm-3 mt-1">
                {typesSolutions.map((typesSolution, index) => (
                    <div className="col-xl-12 col-lg-12 col-md-12 mt-sm-12 mt-4" key={index}>
                        <div className="extractCard typesSolutionCard">
                            <h4>{typesSolution.title}</h4>
                            <p>{typesSolution.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}
