
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Successfully Register');

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
       <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="m-5">
            <img  src="https://img.freepik.com/free-vector/business-people-writing-agreement-shaking-hands-tiny-man-with-magnifying-glass-researching-checklist-document-clipboard-paper-flat-vector-illustration-survey-paperwork-management-concept_74855-21676.jpg?w=1060&t=st=1668058892~exp=1668059492~hmac=610330b80f37aa48f3b1cc54a0b38243afd261a7f0ac68aef2d7d3b11fc2462b" alt="" />
            
          
          </div>
          <div onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold py-5 text-center">Register now!</h1>
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
                <button onClick={notify} className="btn btn-primary">Register</button>
                <Toaster />
                <div>
                  {error}
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;