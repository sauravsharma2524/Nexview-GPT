import React from "react";

const Header = ({ isSignIn }) => {
    return <div className=" w-full flex justify-between  absolute z-50">
        <img className="w-48 lg:mx-36 xl:mx-36 md:mx-36 cursor-pointer  pt-1" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />
        {{ isSignIn } ? <button>
           signout
        </button> : <button>
            signin
        </button>}
    </div>
}

export default Header