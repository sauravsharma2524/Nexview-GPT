import React from "react";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useReturnToHomepage from "../Hooks/useReturnToHomepage";
import { toggleGptView } from "../utils/GptSlice";


const Header = ({ }) => {
    const navigate = useNavigate();
    const returnToHomepage = useReturnToHomepage();


    const dispatch = useDispatch(); 
    const user = useSelector(store => store.user)

    const handleSignOut = () => {


        signOut(auth).then(() => {
            navigate("/");
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.

        });

    }

    const handleGptSearchClick = () => {

        // toggle gpt search button 
        dispatch(toggleGptView())

    }



    return <div className="md:bg-gradient-to-b lg:bg-gradient-to-b sm:bg-gradient-to-b xl:bg-gradient-to-b bg-gradient-to-r bg-black from-black via-red-950 w-full flex justify-between z-30">
        <div >
            <img onClick={returnToHomepage} className="w-48 lg:mx-36 xl:mx-36 md:mx-36 cursor-pointer pt-1" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />
        </div>

        {user && (
            <div className="flex bg-gradient-to-l via-red-950 from-black md:bg-none sm:bg-none lg:bg-none xl:bg-none justify-between items-center">
                <button className="bg-gradient-to-r px-5 hover:from-purple-700 font-medium py-2 mx-3 text-sm rounded-lg via-purple-800 text-white from-purple-600 z-50"
                onClick={handleGptSearchClick}
                >GPT Search</button>
                <div className=' mx-1 p-2 text-sm font-medium border border-red-100 rounded-lg text-white'>{user?.displayName ? user?.displayName : "no username"}</div>
                <button className="hover:bg-red-700 text-white font-medium p-2 text-xs  rounded-lg border border-red-600 sm:m-5 m-2" onClick={handleSignOut}>
                    Sign out
                </button>
            </div>
        )}
    </div>
}

export default Header