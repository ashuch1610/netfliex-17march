import React, { useState, useRef } from 'react';
import Header from "./Header";
import { checkValidate } from "../utils/Validate";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/Constants";





function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // validate the form data

        const message = checkValidate(email.current.value, password.current.value);
        console.log(message);
        console.log(email.current.value);
        console.log(password.current.value);
        setErrorMessage(message);
        if (!isSignInForm) {
            //sign up logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)


                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);

                    updateProfile(user, {
                        displayName: "name.current.value", photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });


                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage, 'error message m')
                    setErrorMessage(errorCode + errorMessage)
                    // ..
                });


        }
        else {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }



    }


    const toggleSignInform = () => {
        //setTitle("Signup")
        setIsSignInForm(!isSignInForm);




    }

    return (
        <div className='relative bg-black bg-opacity-80  w-full h-screen'>

            <img src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp" 
            alt="" className=' relative w-full h-full object-cover' />


            <div className='absolute top-[0px]'>
                <img className='w-36 mx-auto  md:mx-0 '
                    src={LOGO}
                    alt="logo" />
            </div>


            <div className='z-55 bg-opacity-50  w-full h-screen'>


                <form onSubmit={(e) => { e.preventDefault(); handleButtonClick(); }} action="" 
                className='flex flex-col  bg-black bg-opacity-50 space-y-4 relative  mt-[50px] top-[-690px] ml-[432px] z-11  h-[600px] w-[400px] '>
                    {/* <h1 className='bg-white'>{title}</h1> */}
                    
                <h1 className='absolute top-[40px] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-[32px] h-12 text-center'>
                    {isSignInForm ? "Sign IN" : "Sign Up"}
                </h1>

                    {!isSignInForm &&
                        <input type="text"
                            className='bg-black bg-opacity-70 text-white h-12 relative  border border-gray ml-4 mr-8'
                            style={{ marginTop: '100px', marginBottom: '24px' }}
                            placeholder='Full Name' />}
                    <input
                        ref={email}
                        type="text"
                        placeholder='email address'
                        className='bg-black bg-opacity-50 text-white mt-12 h-12 ml-4 mr-8  border border-gray'
                        style={{
                            marginTop: isSignInForm ? '100px' : '0px',
                            marginBottom: '10px',
                        }}
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder='password'
                        className='bg-black bg-opacity-50 text-white mt-4 h-12 ml-4 mr-8  border border-gray'
                        style={{ marginBottom: '10px' }}

                    />
                    <p className='text-red-500 ml-4 mr-8'>{errorMessage}</p>
                    <button
                        className='text-white bg-red-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm ml-4 mr-8 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 '
                        style={{ marginBottom: '10px' }}
                        type='submit'>{isSignInForm ? "Sign IN" : "Sign Up"}</button>

                    <p className='bg-black bg-opacity-50 text-white ml-4 mr-8 h-12 '
                        onClick={toggleSignInform}>{isSignInForm ? "new to netflix?Sign up now" : "Already resigtered? Sign In now"}</p>

                </form>
            </div>


        </div>
    )
}
export default Login;