import React from "react";
import { Link } from "react-router-dom";

const AllServiceCard = ({services}) => {
  const {_id, img, description, title,ratings } = services;
  return (
    <div>
      <div className="card w-9/12  container mx-auto bg-base-100 shadow-xl">
        <div>
          <img src={img} alt="Shoes" />
        </div>
        <div className="card-body">
          <h2 className="text-2xl">
           {title}
            <div className="badge badge-secondary p-3 m-3"> {ratings}</div>
          </h2>
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
