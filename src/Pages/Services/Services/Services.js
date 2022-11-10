import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import AllServiceCard from "../AllServiceCard/AllServiceCard";

const Services = () => {
const services = useLoaderData();





   
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-7 w-full container mx-auto">
    {
      !services ? <><button className="btn btn-square loading"></button></>:<>  {
        services.map(services=><AllServiceCard key={services._id} services={services}></AllServiceCard>)
      }</>
    }
      
    </div>
  );
};

export default Services;
