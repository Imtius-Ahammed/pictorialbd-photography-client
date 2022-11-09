
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
  const[error,setError] =useState(null);
  useTitle('Register')

  const {createUser,updateUser}= useContext(AuthContext);
  const handleRegister =event=>{
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const photoURL= form.photoURL.value;
    const email =form.email.value;
    const password = form.password.value;


    if(password.length<6){
      setError('Password should be 6 characters long');
      return;
    }
   
    createUser(email,password)
    .then(result=>{
      const user = result.user;
      if(user){
        alert('Registration Successful')
      }
      setError('');
      form.reset();
      handleUpdateUser(name,photoURL);

    })
    .catch(error => {

      console.error(error);
      setError(error.message)
    });

    const handleUpdateUser =(name,photoURL)=>{
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUser(profile)
      .then(()=>{})
      .catch(error=>console.error(error));
    }

  }
  return (
    <div>
       <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          
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
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                name='photoURL'
                  type="text"
                  placeholder="photoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name='email'
                required
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
                required
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
                <div>
                  {error}
                </div>
               
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;