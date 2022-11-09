import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AddServices = () => {
  useTitle("AddServices");
  const addServices = useLoaderData();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add Services now!</h1>
         
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">service_id</span>
              </label>
              <input
                name="service_id"
                type="text"
                placeholder="service_id"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="title"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                name="img"
                type="text"
                placeholder="img"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                type="text"
                placeholder="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <input
                name="ratings"
                type="text"
                placeholder="ratings"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Views</span>
              </label>
              <input
                name="views"
                type="text"
                placeholder="views"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea name="description" id="" cols="30" rows="10"></textarea>
             
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
