import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  useTitle('ServiceDetails')
  const { title, img, price, ratings, views, description } = serviceDetails;
  console.log(title);
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1'>
      <div className="card w-9/12 container mx-auto  bg-base-100 shadow-xl">
        <div>
          <img  src={img} alt="Shoes" />
        </div>
        <div className="card-body " >
          <div className="card-title flex justify-between ">
            <div>{title}
            <h3 className="badge badge-secondary m-2">{ratings}</h3>
            </div>
           
            <div><span>Views: {views}k</span></div>
          </div>
          <div>
            <h2 className="text-2xl text-orange-400">Price: ${price}</h2>
          </div>
          <p>{description}</p>
        
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
