import LeftSidebar from '@/components/homePage/LeftSidebar/LeftSidebar';
import NewsHome from '@/components/homePage/newsHome/NewsHome';
import RightSidebar from '@/components/homePage/RightSidebar/RightSidebar';
import React from 'react';
// const getAllNews = async(category_id)=>{
//   const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
//   const data = await res.json()
//   return data.data
// }
const NewsCategoryPage = async({params}) => {
  const {id} = await params
  //const allNews = await getAllNews("02")
  return (
<div className="grid grid-cols-12 gap-7">
      {/* LeftSidebar */}
      <div className='col-span-2'>
        <LeftSidebar activeId={id}/>
      </div>
      {/* News Home */}
      <div className='col-span-7'>
        <NewsHome category_id={id}/>
      {/* <div className='border border-black'>
      <h3 className='font-semibold text-[20px]'>Dragon News Home</h3>
      <div >
        {
          allNews.map((news)=>{return(
            <div key={news._id} className='p-4 border mb-5'>
              <h1>{news.title}</h1>
            </div>
          )})
        }
      </div>
    </div> */}
      </div>
      {/* RightSidebar */}
      <div className='col-span-3'>
        <RightSidebar/>
      </div>
    </div>
  );
};

export default NewsCategoryPage;