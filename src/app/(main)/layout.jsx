
import Header from '@/components/shared/header/Header';
import HotNews from '@/components/shared/hotNews/HotNews';
import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const MainLayouts = ({children}) => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <HotNews></HotNews>
      {children}
    </div>
  );
};

export default MainLayouts;