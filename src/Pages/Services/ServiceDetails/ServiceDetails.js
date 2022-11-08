import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { title, img, price, ratings, views, description } = serviceDetails;
  console.log(title);
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1'>
      <div className="card w-9/12 container mx-auto  bg-base-100 shadow-xl">
        <div>
          <img className="w-2/3 container mx-auto" src={img} alt="Shoes" />
        </div>
        <div className="card-body " >
          <div className="card-title flex justify-between px-4">
            <div>{title}
            <h3 className="badge badge-secondary">{ratings}</h3>
            </div>
           
            <div><span>Views: {views}k</span></div>
          </div>
          <p>{description}</p>
        
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
