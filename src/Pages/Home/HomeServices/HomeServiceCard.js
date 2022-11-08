import React from "react";
import { Link } from "react-router-dom";

const HomeServiceCard = ({ service }) => {
  const { img, description, title } = service;
  return (
    <div>
      <div className="card    container mx-auto lg:w-4/6 my-20 lg:card-side bg-base-100 shadow-xl">
        <div>
          <img  src={img} alt="Album" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="badge badge-secondary">NEW</div>
          <p>{description.length > 100 ? <div>{description.slice(0,100)+'...'}<Link>Load More</Link></div> : description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
