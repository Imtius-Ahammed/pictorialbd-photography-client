import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import UserAddedService from '../../UserAddedService/UserAddedService';
import UserService from '../../UserAddedService/UserService';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import ImageGallery from '../ImageGallery/ImageGallery';

const Home = () => {
  useTitle('Home')
  return (
    <div className='w-10/12 container mx-auto'>
      <h1>This is Home</h1>
      <Banner></Banner>
      <About></About>
      <HomeServices></HomeServices>
      <UserAddedService></UserAddedService>
    
      <Link className='flex justify-center px-5 py-2' to='/services'><button className=' btn btn-ghost btn-outline'>See ALl</button></Link>
      
      
      <ImageGallery></ImageGallery>
      
      
      

    </div>
  );
};

export default Home;