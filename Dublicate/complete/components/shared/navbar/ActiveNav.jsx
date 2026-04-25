"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveNav = ({children, href, className}) => {
  const pathName = usePathname()
  const isActive =  pathName === href || (href === "/" && pathName.includes("/category/"));
  
  return (
  <Link href={href} className={`${className} border-2 text-center font-bold w-25 border-black shadow-md rounded px-4 py-2 ${isActive? 'bg-green-300' : ''} `}>
  {children}
  </Link>
  );
};

export default ActiveNav;