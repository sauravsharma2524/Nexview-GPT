import React from "react";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/Firebase"
import { addUser, removeUser } from "../utils/UserSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";




const Footer = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // user sign in / sign up 
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse")


            } else {
                // user sign out  
                dispatch(removeUser())
                navigate("/")

            }
        })
    }, [])


    return (
        <footer className="bg-black w-full absolute bg-opacity-90 text-white py-4">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-6">
                    <p className="text-sm md:text-base">
                        Questions? Call <a href="tel:000-800-919-1694" className="hover:underline">000-800-919-1694</a>
                    </p>
                </div>
                <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-xs md:text-sm">
                    <a href="/" className="hover:underline">FAQ</a>
                    <a href="/" className="hover:underline">Help Centre</a>
                    <a href="/" className="hover:underline">Terms of Use</a>
                    <a href="/" className="hover:underline">Privacy</a>
                    <a href="/" className="hover:underline">Cookie Preferences</a>
                    <a href="/" className="hover:underline">Corporate Information</a>
                </div>
                <div className="mt-6 text-center">
                    <div className="inline-block relative">
                        <select className="bg-black text-white text-sm border border-gray-700 px-2 py-1 focus:outline-none">
                            <option>English</option>
                            <option>Español</option>
                            {/* Add more languages if needed */}
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;
