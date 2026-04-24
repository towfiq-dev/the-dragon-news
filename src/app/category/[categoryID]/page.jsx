import LeftSidebar from '@/components/homePage/leftSidebar/LeftSidebar';
import RightSidebar from '@/components/homePage/rightSidebar/RightSidebar';
import React from 'react';

const getCategory = async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data.data
}


const getAllPost = async(category_id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
  const data = await res.json()
  return data.data
}

const CategoryDetailsPage = async({params}) => {
const {categoryID} = await params
  const categories = await getCategory()
  const newsCategories = categories.news_category

  const allNews = await getAllPost(categoryID)

  return (
    <div className="grid grid-cols-12 justify-center mt-8">
      {/* LeftSidebar */}
      <div className='col-span-3'>
        <h1 className='text-[20px] font-bold mb-5'>All Categories</h1>
        <LeftSidebar newsCategories={newsCategories} activeId={categoryID}/>
      </div>
      {/* center */}
      <div className='col-span-6'>
        <h3 className='text-[20px] font-bold mb-5'>Dragon News Home</h3>
        {/* <AllNews/> */}
        <div>
          {
        allNews.map((news)=> {
          const {_id, title} = news
          return(
          <div key={_id}>
            <h3>{title}</h3>
          </div>
        )})
      }
        </div>
      </div>
      {/* RightSidebar */}
      <div className='col-span-3'>
        <h3 className='text-[20px] font-bold mb-5'>Login with</h3>
        <RightSidebar />
      </div>
    </div>
  );
};

export default CategoryDetailsPage;