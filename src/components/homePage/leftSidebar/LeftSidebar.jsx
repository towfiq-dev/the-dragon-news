import Link from 'next/link';
import React from 'react';
const AllCategory = async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data.data
}
const LeftSidebar = async() => {
  const allCategories = await AllCategory()
  const allCategory = allCategories.news_category
  return (
    <div>
      <h3 className='font-semibold text-[20px] mb-4'>All Category</h3>
      <div>
        {
          allCategory.map((category)=> {
            const {category_id, category_name} = category
            return(
          <ul key={category_id}>
          <li className='border-1 font-semibold border-black px-4 py-2 btn mb-3 w-40'>
            <Link href={'/'} >{category_name}</Link>
          </li>
          </ul>
          )})
        }
      </div>
    </div>
  );
};

export default LeftSidebar;