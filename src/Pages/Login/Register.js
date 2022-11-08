
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
  const[error,setError] =useState(null);

  const {createUser}= useContext(AuthContext);
  const handleRegister =event=>{
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const email =form.email.value;
    const password = form.password.value;
   
    console.log(name,email)

    if(password.length<6){
      setError('Password should be 6 characters long');
      return;
    }
   
    createUser(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      form.reset();

    })
    .catch(error => console.error(error));

  }
  return (
    <div>
       <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                name='name'
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name='email'
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name='password'
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to='/login' className="label-text-alt link link-hover">
                    Already have an account?
                  </Link>
                  <p className='text-red-500'>{error}</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;