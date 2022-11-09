import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewTable from '../ReviewTable/ReviewTable';


const MyReviews = () => {
  const{user} = useContext(AuthContext);
  useTitle('MyReviews');
  const[reviews,setReviews]= useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setReviews(data))

  },[user?.email])


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
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = reviews.filter((ord) => ord._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div className='w-9/12 container mx-auto'>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Reviews</th>
        <th>Ratings</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {reviews.map(review=><ReviewTable key={review._id} review={review} handleDelete={handleDelete}></ReviewTable>)}
      
    </tbody>
    
   
    
  </table>
</div>
     
    </div>
  );
};

export default MyReviews;
