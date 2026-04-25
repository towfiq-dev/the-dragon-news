import Link from 'next/link';
import React from 'react';
const AllCategory = async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data.data
}
const LeftSidebar = async({ activeId }) => {
  const allCategories = await AllCategory()
  const allCategory = allCategories.news_category
  return (
    <div>
      <h3 className='font-semibold text-[20px] mb-4'>All Category</h3>
      <div>
        {
          allCategory.map((category)=> {
            const {category_id, category_name} = category
            const isActive = activeId === category_id
            return(
          // <ul key={category_id}>
          // <li className='border-1 font-semibold border-black px-4 py-2 btn mb-3 w-40'>
          //   <Link className='inline-block' href={`/category/${category_id}`} >{category_name}</Link>
          // </li>
          // </ul>
          <Link key={category_id} href={`/category/${category_id}`} className="w-full">
              <button className={`w-full mb-3 text-left px-4 py-2 rounded cursor-pointer font-medium transition-all
                ${isActive 
                  ? 'bg-[#E7E7E7] text-black font-bold' 
                  : 'text-[#9F9F9F] hover:bg-gray-100'}`}>
                {category_name}
              </button>
            </Link>
          )})
        }
      </div>
    </div>
  );
};

export default LeftSidebar;