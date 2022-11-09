import React, { useContext, useState} from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ReviewTable = ({review,handleDelete}) => {
  const {user}= useContext(AuthContext);
  const{_id,email,message} = review;
  const [reviewDetail, setReviewDetail]=useState({})
 




 
  return (
    <tr>
      <th>
        <label>
        <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline"
          >
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={user?.photoURL}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{user?.displayName}</div>
            <div className="text-sm opacity-50">{user?.email}</div>
          </div>
        </div>
      </td>
      <td>
       <h2>{message}</h2>
       
      </td>
      
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ReviewTable;
