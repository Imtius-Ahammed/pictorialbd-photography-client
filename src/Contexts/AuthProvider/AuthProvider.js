import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export  const AuthContext = createContext();

const auth =getAuth(app);

const AuthProvider = ({children}) => {

  const [user,setUser] =useState(null);
  const [loading, setLoading]= useState(true);
  
  const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const updateUser =(profile)=>{
    setLoading(true);
    return updateProfile(auth.currentUser,profile);
  }

  const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  
  const providerLogin =(provider)=>{
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const logOut =()=>{
    setLoading(true);
    return signOut(auth);
  } 
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log('current User state change', currentUser);
      setUser(currentUser);
      setLoading(false);
    })
    return ()=> unSubscribe();

  },[])

const authInfo ={updateUser,user,createUser,signIn,logOut,loading,providerLogin}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;