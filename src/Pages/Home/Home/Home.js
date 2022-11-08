import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import ImageGallery from '../ImageGallery/ImageGallery';

const Home = () => {
  return (
    <div className='w-10/12 container mx-auto'>
      <h1>This is Home</h1>
      <Banner></Banner>
      <About></About>
      <HomeServices></HomeServices>
      <ImageGallery></ImageGallery>
      
      

    </div>
  );
};

export default Home;