import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const UserService = ({service}) => {
  const {_id,img,price,description,title}=service;
  return (
    <div>
      <div className="card   container mx-auto lg:w-4/5 my-20 lg:card-side bg-base-100 shadow-xl">
        <div>
          <PhotoProvider
            speed={() => 800}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            <PhotoView src={img}>
              <img
                className="lg:w-full lg:h-full"
                style={{ objectfit: "cover" }}
                src={img}
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="card-body lg:w-screen">
          <div>
           
            <h2 className="card-title">{title}</h2>
          </div>
          <div className="badge badge-secondary">NEW</div>
          <div className="py-5 ">
           
            <p>
              {description.length > 100 ? (
                <div>{description.slice(0, 100) + "..."}</div>
              ) : (
                description
              )}
            </p>
          </div>
          <div className="flex justify-between">
            <h2 className="text-2xl text-orange-400">Price: ${price}</h2>
           
          </div>
          <div className="card-actions justify-end">
            <Link to={`/serviceDetails/${_id}`}>
              <button className="btn btn-ghost btn-outline">
                Full Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserService;
