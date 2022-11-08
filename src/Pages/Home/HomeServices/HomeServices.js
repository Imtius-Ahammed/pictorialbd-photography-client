import React, { useEffect, useState } from 'react';
import ServiceCard from './HomeServiceCard';

const HomeServices = () => {
  const [services,setServices] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  return (
    <div>
      <h2> THis is Home services</h2>
      {
        services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
      }
      

      
    </div>
  );
};

export default HomeServices;