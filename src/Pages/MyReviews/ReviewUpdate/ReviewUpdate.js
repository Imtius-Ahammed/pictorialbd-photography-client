import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ReviewUpdate = () => {
  const storedUser = useLoaderData();

  const { message, email, _id } = storedUser;
  console.log(storedUser);

  const reviewUpdate = (event) => {
    event.preventDefault();
    console.log(storedUser);
    const form = event.target;
    const email = form.email.value;
    const message = form.message.value;

    const review = {
      message,
      email,
    };

    fetch("https://pictorialbd-photography-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review posted");
          form.reset();
        }
      })
      .catch((er) => console.error(er));

    fetch(`https://pictorialbd-photography-server.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(storedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review Updated");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <h2>{email}</h2>
      <h2>{message}</h2>

      <form onSubmit={reviewUpdate} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Coming Soon!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  defaultValue={email}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <textarea
                  defaultValue={message}
                  className="border"
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewUpdate;
