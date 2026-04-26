import LeftSidebar from '@/components/homePage/LeftSidebar/LeftSidebar';
import NewsHome from '@/components/homePage/newsHome/NewsHome';
import RightSidebar from '@/components/homePage/RightSidebar/RightSidebar';
import React from 'react';

const NewsCategoryPage = async({params}) => {
  const {id} = await params

  return (
<div className="grid grid-cols-12 gap-7">
      {/* LeftSidebar */}
      <div className='col-span-2'>
        <LeftSidebar activeId={id}/>
      </div>
      {/* News Home */}
      <div className='col-span-7'>
        <NewsHome category_id={id}/>
      
      </div>
      {/* RightSidebar */}
      <div className='col-span-3'>
        <RightSidebar/>
      </div>
    </div>
  );
};

export default NewsCategoryPage;