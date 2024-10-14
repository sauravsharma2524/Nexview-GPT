import React from "react"; 
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = ({  }) => {
    const navigate = useNavigate();


    const user = useSelector(store => store.user)

    const handleSignOut = () => {


        signOut(auth).then(() => {
            navigate("/");
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
            
        });
         
    }

    return <div className="md:bg-gradient-to-b lg:bg-gradient-to-b sm:bg-gradient-to-b xl:bg-gradient-to-b bg-gradient-to-r from-black via-red-950 w-full flex justify-between lg:absolute md:absolute sm:absolute  z-50">
        <img className="w-48 lg:mx-36 xl:mx-36 md:mx-36 cursor-pointer pt-1" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />
        {user && (
            <div className="flex bg-gradient-to-l via-red-950 from-black md:bg-none sm:bg-none lg:bg-none xl:bg-none justify-between items-center">
                <div className=' mx-1 p-2 text-sm font-medium border border-red-100 rounded-lg text-white'>{user?.displayName ? user?.displayName : "no username" }</div>
                <button className="hover:bg-red-700 text-white font-medium p-2 text-xs  rounded-lg border border-red-600 sm:m-5 m-2" onClick={handleSignOut}>
                    Sign out
                </button>
            </div>
        )}
    </div>
}

export default Header