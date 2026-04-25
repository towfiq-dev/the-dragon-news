import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm mb-6 overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
        <div className="flex items-center gap-3">
          <Image 
            className="rounded-full object-cover" 
            src={news.author.img} 
            width={45} 
            height={45} 
            alt="Author" 
          />
          <div>
            <h4 className="text-sm font-bold text-gray-800">{news.author.name}</h4>
            <p className="text-xs text-gray-500">{news.author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xl text-gray-600">
          <CiBookmark className="cursor-pointer hover:text-blue-500 transition-colors" />
          <CiShare2 className="cursor-pointer hover:text-blue-500 transition-colors" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
          {news.title}
        </h2>
        
        <div className="relative w-full h-[250px] md:h-[400px] mb-4">
          <Image 
            className="rounded-md object-cover" 
            fill 
            src={news.image_url} 
            alt="News Banner" 
          />
        </div>

        <p className="text-sm text-gray-600 line-clamp-3 mb-2">
          {news.details}
        </p>
        
        <Link 
          href={`/news/${news._id}`} 
          className="text-orange-500 font-semibold text-sm hover:underline"
        >
          Read More
        </Link>
      </div>

      <hr className="mx-4" />

      {/* Footer Section */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Rating Stars */}
          <div className="flex text-orange-400 gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="text-sm font-medium text-gray-500">{news.rating.number}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span className="text-sm font-medium">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;