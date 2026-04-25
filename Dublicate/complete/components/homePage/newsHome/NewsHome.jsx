import React from 'react';
import NewsCard from '../newsCard/NewsCard';
const getAllNews = async(category_id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
  const data = await res.json()
  return data.data
}
const NewsHome = async({category_id}) => {
const allNews = await getAllNews(category_id)
  return (
    <div >
      <h3 className='font-semibold text-[20px]'>Dragon News Home</h3>
      <div>
        {  
        //allNews.length > 0?
          allNews.map((news, index)=> 
          <NewsCard key={index} news={news}/>
        )}
      </div>
    </div>
  );
};

export default NewsHome;