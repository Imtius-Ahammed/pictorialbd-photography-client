
import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";


import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const {user}=useContext(AuthContext)
  const serviceDetails = useLoaderData();
  useTitle('ServiceDetails')
  const { title, img, price, ratings, views, description } = serviceDetails;
  console.log(title);


  const postReview=event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const message = form.message.value;


    const review = {
      message,
      email

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


    {
      user?.email ? <div>
      <form onSubmit={postReview}>
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
 
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">User Reviews</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
    
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" defaultValue={user?.email} required id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea required id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>

      </form>
    </div>:
    <div> <h3 className="text-3xl text-orange-500">Please Login First<Link to='/login' className="btn  text-2xl btn-outline">Login</Link></h3></div>
    }

   
   </div>
  );
};

export default ServiceDetails;
