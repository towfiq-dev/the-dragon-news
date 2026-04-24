import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';
import { geistMono } from '../layout';

const AuthLayouts = ({children}) => {
  return (
    <div className={`${geistMono}`}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayouts;