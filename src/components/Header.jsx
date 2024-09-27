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
            console.log("logged out succesfully");
            navigate("/");

            // Sign-out successful.
        }).catch((error) => {
            console.log("error in logging out");
            
            // An error happened.
        });
         
    }

    return <div className=" w-full flex justify-between  absolute z-50">
        <img className="w-48 lg:mx-36 xl:mx-36 md:mx-36 cursor-pointer  pt-1" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />
        {user && (
            <div className="flex justify-between items-center">
                <button onClick={handleSignOut} className="hover:bg-red-500 text-white m-5 p-2 font-semibold rounded-lg bg-red-600 ">
                    Sign out
                </button>
                <div className='bg-orange-500 mx-2 p-2 text-lg font-medium rounded-lg text-white'>{user?.displayName ? user?.displayName : "no username" }</div>
            </div>
        )}
    </div>
}

export default Header