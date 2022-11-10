import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserServiceCard from './UserServiceCard';

  const UserServices = () => {
  const userService = useLoaderData();
 
 
  return (
    <div>
      {userService.slice(6,30).map(service=><UserServiceCard key={service._id} service={service}></UserServiceCard>)}
    </div>
  );
};

export default UserServices;