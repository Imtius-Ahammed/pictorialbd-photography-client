import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Deleted Successfully');

const ReviewTable = ({review ,handleDelete}) => {
  const {user}= useContext(AuthContext);
  const{_id,message,title,email} = review;
  console.log(review);
  

 
  return (
    <tr >
      <th>
        <div onClick={notify}>
        
        <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline"
          >
            X
          </button>
        </div>
        <Toaster />
      </th>
      <td>
        <div className="flex items-center py-4 space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={user?.photoURL}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div >
            <div className="font-bold">{user?.displayName}</div>
            <div className="text-sm opacity-50">{user?.email}</div>
            <div className="text-sm opacity-50">{title}</div>
          </div>
        </div>
      </td>
      <td>
       <div>
       <h2 >{message}</h2>
       </div>
       
      </td>
      
      <th>
      {/* <Link to={`/update/${_id}`}> */}
      
<label htmlFor="my-modal-5" className="btn">Edit Details</label>


<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">{email}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label htmlFor="my-modal-5" className="btn"><Link to={`/update/${_id}`}>Update</Link></label>
    </div>
  </div>
</div>

        
      </th>
    </tr>
  );
};

export default ReviewTable;
