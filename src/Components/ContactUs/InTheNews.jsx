import React from 'react';
import Forbes from '../../assets/images/forbes-top-ai-consulting-firms.svg';
import Insight from '../../assets/images/SP-Global.png';
import Entrepreneur from '../../assets/images/Entrepreneur.png';
import Generative from '../../assets/images/Generative-AI.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const newsData = [
  {
    image: Forbes,
    title: 'Zyntellect Named Among Top AI Consulting Firms by Forbes',
    description: 'A Forbes article ranked Zyntellect among the top 10 AI consulting firms.',
    buttonText: 'Read More',
    link: '#',
  },
  {
    image: Insight,
    title: 'Zyntellect Featured in S&P Global’s Piece on AI’s Impact on Private Equity',
    description: 'Explore Zyntellect\'s insights in S&P Global\'s article delving into AI\'s impact on private equity businesses',
    buttonText: 'Read More',
    link: '#',
  },
  {
    image: Entrepreneur,
    title: 'Zyntellect’s AI Excellence Shines in Entrepreneur Feature',
    description: 'Zyntellect got featured in "Entrepreneur" magazine\'s insight, "Should You Hire An AI Consultant?"',
    buttonText: 'Read More',
    link: '#',
  },
  {
    image: Generative,
    title: 'Zyntellect’s Next-gen Generative AI Development Services Transform Global Businesses',
    description: 'Zyntellect, a global provider of generative AI development services, is at the forefront of driving transformative innovation across industries with its generative AI development capabilities.',
    buttonText: 'Read More',
    link: '#',
  },
];

export default function InTheNews() {
  return (
    <>
      <div className="marginSet">
        <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
          <h2 className='mb-3'>In The News</h2>
        </div>
      </div>
      <div className="marginSet">
        <div className="">
          <div className="row">
            {newsData.map((news, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-4" key={index}>
                <div className='newsCard'>
                  <Link to={news.link}>
                    <img src={news.image} alt="News Image" className='w-100' />
                  </Link>
                  <div className="edgeContent ps-2">
                    <p>{index === 3 ? 'Press Release' : 'News'}</p>
                  </div>
                  <div className='newsCardContent'>
                    <Link to={news.link}><h6>{news.title}</h6></Link>
                    <p>{news.description}</p>
                    <div className='newsCardFooter'>
                      <Link to={news.link}>
                        <Button variant='contained'>{news.buttonText}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
