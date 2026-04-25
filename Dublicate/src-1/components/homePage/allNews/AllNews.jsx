import React from 'react';
const getAllPost = async(category_id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
  const data = await res.json()
  return data.data
}
const AllNews = async() => {
  const allNews = await getAllPost()
  return (
    <div>
      {
        allNews.map((news)=> {
          const {id} = news
          return(
          <div key={id}>
            <h3>{title}</h3>
          </div>
        )})
      }
    </div>
  );
};

export default AllNews;