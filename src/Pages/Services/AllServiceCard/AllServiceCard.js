import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const AllServiceCard = ({services}) => {
  const {_id, img, description, title,ratings,price,views } = services;
  useTitle('AllServiceCard')
  return (
    <div>
      <div className="card w-9/12  container mx-auto bg-base-100 shadow-xl">
        <div>
          <img src={img} alt="Shoes" />
        </div>
        <div className="card-body">
          <div className="text-2xl ">
           <div>{title}
           <h2 className="badge badge-secondary p-3 m-3"> {ratings}</h2>
           </div>
            
          </div>
          
          <div className="flex justify-between">
            <h2 className="text-2xl text-orange-400">Price: ${price}</h2>
            <div><span>Views: {views}k</span></div>
          </div>
          <p>{description.length > 100 ? <>{description.slice(0,100)+'...'}</> : description}</p>
          <div className="card-actions justify-end">
            
          <Link to={`/serviceDetails/${_id}`}><button className="btn btn-ghost btn-outline">Full Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServiceCard;
