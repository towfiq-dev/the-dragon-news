import React from 'react';
const getAllNews = async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/category/01')
  const data = await res.json()
  return data.data
}
const NewsHome = async() => {
  const allNews = await getAllNews()
  return (
    <div>
      <h3 className='font-semibold text-[20px]'>Dragon News Home</h3>
      <div>
        {
          allNews.map((news)=>{return(
            <div key={news._id}>
              <h1>{news.title}</h1>
            </div>
          )})
        }
      </div>
    </div>
  );
};

export default NewsHome;