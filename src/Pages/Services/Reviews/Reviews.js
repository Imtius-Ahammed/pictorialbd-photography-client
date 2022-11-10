import React, { useContext } from "react";

import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Reviews = ({review}) => {
  const{message,email}=review;
  const {user} = useContext(AuthContext);
  console.log(review);
  return (
    <div>
    
    <div className="card h-9/12 bg-base-100 shadow-xl">
  <div className="card-body">
   <div className="flex justify-center items-center gap-2">
    
    <div><h2 className="card-title">{email}</h2></div>
    
   </div>
    
    <textarea  className="text-center border" readOnly name="" id="" cols="30" rows="10">{message}</textarea>
    
  </div>
</div>
    </div>
  );
};

export default Reviews;
