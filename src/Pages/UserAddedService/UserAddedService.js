import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserService from './UserService';

const UserAddedService = () => {
  const userService = useLoaderData();
 
 
  return (
    <div>
      {userService.slice(6,30).map(service=><UserService key={service._id} service={service}></UserService>)}
    </div>
  );
};

export default UserAddedService;