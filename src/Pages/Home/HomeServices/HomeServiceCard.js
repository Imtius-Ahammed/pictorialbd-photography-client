import React from "react";
import { Link } from "react-router-dom";


export const HomeServiceCard = ({ service }) => {
  const { _id,img, description, title } = service;
  return (
    <div>
      <div className="card    container mx-auto lg:w-4/6 my-20 lg:card-side bg-base-100 shadow-xl">
        <div>
        <img src={img} alt="" />
      
        </div>
        <div className="card-body">
         <div> <h2 className="card-title">{title}</h2></div>
          <div className="badge badge-secondary">NEW</div>
         <div> <p>{description.length > 100 ? <div>{description.slice(0,100)+'...'}</div> : description}</p></div>
          <div className="card-actions justify-end">
          <Link to={`/serviceDetails/${_id}`}><button className="btn btn-ghost btn-outline">Full Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
