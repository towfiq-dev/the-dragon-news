import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
  return (
    <div className='space-y-4'>
    <span className='flex items-center gap-3 border-2 border-black justify-center px-5 py-2 rounded'>
      <FaGoogle />
      <p>LogIn with Google</p>
    </span>
    <span className='flex items-center gap-3 border-2 border-black justify-center px-5 py-2 rounded'>
      <FaGithub />
      <p>Login with github</p>
    </span>
    </div>
  );
};

export default RightSidebar;