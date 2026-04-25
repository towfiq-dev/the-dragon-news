import React from 'react';
import Marquee from 'react-fast-marquee';
const news =[
  {
    id: 1,
    title: "Match Highlights:1"
  },
  {
    id: 2,
    title: "Match Highlights:2"
  },
  {
    id: 3,
    title: "Match Highlights:3"
  }
]
const HotNews = () => {
  return (
    <div className='border-2 border-green-500 px-4 py-3 flex items-center gap-4 mt-5'>
      <button className='btn bg-red-500 text-white font-semi-bold'>Latest News</button>
      <Marquee pauseOnHover={true} speed={40}>
        {
          news.map((n, index)=>{return(
            <div key={index}>
            <p>n{n.title}</p>
            </div>
          )})
        }
      </Marquee>
    </div>
  );
};

export default HotNews;