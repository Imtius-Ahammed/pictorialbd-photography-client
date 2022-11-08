import React from "react";
import { Link } from "react-router-dom";


export const HomeServiceCard = ({ service }) => {
  const { _id,img, description, title,views,price } = service;
  return (
    <div>
      <div className="card   container mx-auto lg:w-4/5 my-20 lg:card-side bg-base-100 shadow-xl">
        <div  >
        <img className="lg:w-4/5 lg:h-full"  src={img} alt="" />
      
        </div>
        <div className="card-body lg:w-screen">
         <div> <h2 className="card-title">{title}</h2></div>
          <div className="badge badge-secondary">NEW</div>
         <div className="py-5 "> <p>{description.length > 100 ? <div>{description.slice(0,100)+'...'}</div> : description}</p></div>
         <div className="flex justify-between">
            <h2 className="text-2xl text-orange-400">Price: ${price}</h2>
            <div><span>Views: {views}k</span></div>
          </div>
          <div className="card-actions justify-end">

          <Link to={`/serviceDetails/${_id}`}><button className="btn btn-ghost btn-outline">Full Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
