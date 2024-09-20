import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { DataValidation } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/Firebase';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const validationMessage = DataValidation(email.current.value, password.current.value)
        seterrorMessage(validationMessage)

        if (validationMessage) return;

        if (!isSignIn) {
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + " " + errorMessage)
                    console.log(errorCode + " " + errorMessage);

                })

        } else {
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential;
                    console.log(user);
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + " " + errorMessage)
                })
        }
    }

    const ToggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }

    return (
        <div className="min-h-screen bg-cover bg-center flex justify-center items-center">
            <img
                className="min-h-screen w-full absolute object-cover z-1"
                src='https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg'
                alt='Background image'
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="bg-black relative bg-opacity-70 p-9 sm:p-8 md:p-10 lg:p-10 rounded-md shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] mt-10 max-w-lg">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </h2>
                    <div>
                        {!isSignIn && (
                            <input
                                id="Name"
                                type="text"
                                placeholder='Full Name'
                                required
                                className="w-full mb-3 px-2 py-3 bg-gray-700 bg-opacity-20 text-white rounded-md focus:ring-white border-gray-500 focus:ring-2 focus:border-gray-700 border-[0.1rem]"
                            />
                        )}
                        <input
                            ref={email}
                            id="email"
                            type="email"
                            placeholder='Email Address'
                            required
                            className="w-full px-2 py-3 bg-gray-700 bg-opacity-20 text-white rounded-md focus:ring-white border-gray-500 focus:ring-2 focus:border-gray-700 border-[0.1rem]"
                        />
                    </div>
                    <div>
                        <input
                            ref={password}
                            id="password"
                            type="password"
                            placeholder='Password'
                            required
                            className="w-full px-2 py-3 border-gray-500 bg-gray-700 bg-opacity-20 text-white rounded-lg focus:border-gray-700 focus:ring-2 focus:ring-white border-[0.1rem]"
                        />
                    </div>
                    <p className='text-lg font-semibold text-red-600'>{errorMessage}</p>
                    <button
                        onClick={handleButtonClick}
                        className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </button>
                </form>

                <div className="flex justify-between mt-4 text-gray-300 text-sm">
                    <div className="flex items-center">
                        <input type="checkbox" id="remember-me" className="mr-2" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <a href="/" className="hover:underline">
                        Need help?
                    </a>
                </div>

                <p onClick={ToggleSignInForm} className="text-center cursor-pointer hover:underline text-gray-300 mt-6">
                    {isSignIn ? "New to Netflix? Sign up now" : "Already Registered? Sign in now"}
                </p>

                <p className="text-gray-500 text-xs mt-4 text-center">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                </p>
            </div>
        </div>
    );
}

export default Login    
