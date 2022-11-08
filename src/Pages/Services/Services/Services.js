import React, { useEffect, useState } from "react";
import AllServiceCard from "../AllServiceCard/AllServiceCard";

const Services = () => {
  const [services,setServices] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-7 w-full container mx-auto">
      {
        services.map(services=><AllServiceCard key={services._id} services={services}></AllServiceCard>)
      }
      
    </div>
  );
};

export default Services;
