import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Img1 from '../../../assets/asset/Rectangle 3986-1.png'
import Img2 from '../../../assets/asset/Rectangle 3986.png'
import Img3 from '../../../assets/asset/Rectangle 3986-2.png'
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
        <div className="space-y-6 flex flex-col items-center width-full">
          {/* Swimming Card */}
          <div className="relative group">
            <Image src={Img1} alt="Swimming" className="w-full h-auto rounded-lg shadow-sm" />
            <p className="text-center mt-2 font-semibold text-gray-700 uppercase tracking-wide text-sm italic">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          </div>

          {/* Class Card */}
          <div className="relative">
            <Image src={Img2} alt="Class" className="w-full h-auto rounded-lg shadow-sm" />
            <p className="text-center mt-2 font-semibold text-gray-700 uppercase tracking-wide text-sm italic">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          </div>

          {/* Playground Card */}
          <div className="relative">
            <Image src={Img3} alt="Playground" className="w-full h-auto rounded-lg shadow-sm" />
            <p className="text-center mt-2 font-semibold text-gray-700 uppercase tracking-wide text-sm italic">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          </div>
        </div>

    </div>
  );
};

export default LeftSidebar;