import LeftSidebar from '@/components/homePage/LeftSidebar/LeftSidebar';
import NewsHome from '@/components/homePage/newsHome/NewsHome';
import RightSidebar from '@/components/homePage/RightSidebar/RightSidebar';
import React from 'react';

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* LeftSidebar */}
      <div className='col-span-3'>
        <LeftSidebar/>
      </div>
      {/* News Home */}
      <div className='col-span-6'>
        <NewsHome/>
      </div>
      {/* RightSidebar */}
      <div className='col-span-3'>
        <RightSidebar/>
      </div>
    </div>
  );
};

export default Home;
