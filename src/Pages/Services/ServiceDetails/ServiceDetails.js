
import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  useTitle('ServiceDetails')
  const { title, img, price, ratings, views, description } = serviceDetails;
  console.log(title);


  const postReview=event=>{
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;

    const review = {
      message

    }
    fetch('http://localhost:5000/reviews',{
      method:'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged){
        alert('Review posted');
        form.reset();
      }
    })
    .catch(er=>console.error(er));
  
  }
   

  
  return (
   <div className="w-9/12 container mx-auto">
     <div className='grid lg:grid-cols-2 grid-cols-1'>
      <div className="card w-9/12 container mx-auto  bg-base-100 shadow-xl my-10">
        <div>
          <img  src={img} alt="Shoes" />
        </div>
        <div className="card-body " >
          <div className="card-title flex justify-between ">
            <div>{title}
            <h3 className="badge badge-secondary m-2">{ratings}</h3>
            </div>
           
            <div><span>Views: {views}k</span></div>
          </div>
          <div>
            <h2 className="text-2xl text-orange-400">Price: ${price}</h2>
          </div>
          <p>{description}</p>
        
        </div>
      </div>
      <Reviews></Reviews>
    </div>




    <div>
      <form onSubmit={postReview}>
      <textarea name='message' className="textarea textarea-bordered " rows="10" cols="70" placeholder="Bio"></textarea>
      <button className='btn'>Post</button>

      </form>
    </div>
   </div>
  );
};

export default ServiceDetails;
