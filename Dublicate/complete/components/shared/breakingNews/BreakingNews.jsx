import React from 'react';
import Marquee from 'react-fast-marquee';
const news = [
{
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
},
{
"id": 2,
"title": "qui est esse",
"body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
},
{
"id": 3,
"title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
"body": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
},
]
const BreakingNews = () => {
  return (
    <div className='mt-7 bg-gray-300 rounded shadow-md flex items-center gap-3 px-4 py-2'>
      <button className='btn bg-red-500 '>Latest News</button>
      <Marquee speed={40} pauseOnHover= {true}>
        {
          news.map((n)=>{
          const {id, title, body} = n
          return(
            <div key={id}>
            <h1>{title}</h1>
            </div>
          )
          })
        }
      </Marquee>
    </div>
  );
};

export default BreakingNews;