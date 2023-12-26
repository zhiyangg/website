import React from 'react';
import Navbar from '../components/navbar'; 
import Home from '../components/home';
import About from '../components/about';
import './globals.css';

const Page = () => {
  return (
    <main>
      <Home />
      <Navbar />
      <About />
    </main>
  );
};

export default Page;