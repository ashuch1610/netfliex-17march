import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { auth } from "../utils/FireBase";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { addUser, removeUser } from "../utils/userSlice";
import { changeLanguage } from "../utils/configSlice";

import { LOGO } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { Supported_Language } from "../utils/Constants";


function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const gptflag = useSelector((store)=> store.gpt.getflag)

  console.log(gptflag,'inside header to render')


  const handleSignOut = () => {

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });


  }

  const handleLanguageChange =(e)=>{

      console.log(e.target.value,'lang')
      dispatch(changeLanguage(e.target.value))
  }

  const handleGptSearch = () => {


    dispatch(toggleGptSearchView())

  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch
          (addUser({
            uid: uid,
            email: email,
            displayName: displayName
          })
          )
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    })
    return () => unsubscribe();
  }, [])
  return (
    <div className='absolute px-8 py-2 w-screen bg-black opacity-50 flex flex-col md:flex-row  md:opacity-60'>
      <img className='  w-36 mx-auto  md:mx-0 '
        src={LOGO}
        alt="logo" />
       {
  (user && gptflag) ? (
    <div className='md:ml-auto'>
        <button className='text-white bg-red-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={handleGptSearch}>GPT</button>

<button className='text-white bg-red-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={handleSignOut}>Signout</button>
    </div> 
  ) : (
    <div className='md:ml-auto'>
      <select onChange={handleLanguageChange}>
        {
          Supported_Language.map((item) => (
            <option key={item.identifier}>{item.name}</option>
          ))
        }
      </select>

      {/* These buttons are always shown when user and gptflag are not both true */}
      <button className='text-white bg-red-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={handleGptSearch}>GPT</button>

      <button className='text-white bg-red-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={handleSignOut}>Signout</button>
    </div>
  )
}


      {/* {user &&   (<div >



        <select onClick={handleLanguageChange}>
          {

            Supported_Language.map((item) => (
              <option key={item.identifier}>{item.name}</option>

            )

             
            )
          }
        </select>

        <button className='bg-blue-500 rounded' onClick={handleGptSearch} >GPT</button>
        <button className='bg-red-500 rounded' onClick={handleSignOut}>Signout</button>
      </div>) */}


      


    </div>
  )
}
export default Header;