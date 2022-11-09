import React, { useContext} from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ReviewTable = ({review}) => {
  const {user}= useContext(AuthContext);
  const{_id,email,message} = review;
 


  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // if (data.deletedCount > 0) {
          //   alert("Deleted successfully");
          //   const remaining = review.filter((ord) => ord._id !== id);
          //   se(remaining);
          // }
        });
    }
  };

 
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
