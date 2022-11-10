import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const AllServiceCard = ({services}) => {
  const {_id, img, description, title,ratings,price,views } = services;
  useTitle('AllServiceCard')
  return (
    <div>
      <div className="card w-9/12  container mx-auto bg-base-100 shadow-xl">
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
                className="lg:w-full lg:h-full hover:shadow-2xl hover:shadow-black"
                style={{ objectfit: "cover" }}
                src={img}
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
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
