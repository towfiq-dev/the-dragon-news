import React from 'react';
import Image from 'next/image';
import NavLogo from '../../../assets/asset/user.png'
import Link from 'next/link';
import ActiveNav from './ActiveNav';
const Navbar = () => {
  const links = (
  <div className='flex justify-center gap-4 items-center '>
    <ActiveNav href={'/'}>Home</ActiveNav>
    <ActiveNav href={'/about'}>About</ActiveNav>
    <ActiveNav href={'/career'}>Career</ActiveNav>
  </div>
  )
  return (
    <div className='flex items-center justify-between mt-7'>
      <div></div>
      <ul className='flex justify-center gap-5'>
        
        {links}
        
      </ul>
      <div className='flex items-center gap-4 '>
        <Image src={NavLogo} alt='HeaderLogo'></Image>
        <Link href={'/auth/login'} >
        <button className='btn'>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;