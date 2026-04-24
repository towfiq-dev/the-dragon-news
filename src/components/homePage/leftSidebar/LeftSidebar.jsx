import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({newsCategories, activeId}) => {
  return (
          <ul className='space-y-4'>
          {
            newsCategories.map((newsCategory)=>{
              const {category_name, category_id } = newsCategory
              return(
          
              <Link href={`/category/${category_id}`} key={category_id}>
              <button className={`btn w-50 shadow-md text-semi-bold text-[17px] ${activeId === category_id && 'bg-green-500'}`}>{category_name}</button>
              </Link>
            )})
          }
        </ul>
  );
};

export default LeftSidebar;