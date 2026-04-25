import React from 'react';
import Image from 'next/image';
import HeaderLogo from '../../../assets/asset/logo.png'
import { format } from 'date-fns';
const Header = () => {
  return (
    <div className='text-center mt-5 space-y-2'>
      <Image className='mx-auto' width={485} height={50} src={HeaderLogo} alt='HeaderLogo'></Image>
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEE, MMM/dd/yyyy")}</p>
    </div>
  );
};

export default Header;