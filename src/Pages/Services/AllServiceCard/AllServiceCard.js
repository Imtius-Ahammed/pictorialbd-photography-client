import React from "react";
import { Link } from "react-router-dom";

const AllServiceCard = ({services}) => {
  const { img, description, title } = services;
  return (
    <div>
      <div className="card w-9/12  container mx-auto bg-base-100 shadow-xl">
        <div>
          <img src={img} alt="Shoes" />
        </div>
        <div className="card-body">
          <h2 className="text-2xl">
           {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description.length > 100 ? <>{description.slice(0,100)+'...'}<Link>Load More</Link></> : description}</p>
          <div className="card-actions justify-end">
            
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServiceCard;
