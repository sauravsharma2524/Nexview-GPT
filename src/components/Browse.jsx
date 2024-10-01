import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import getNowPayingMovies from "../Hooks/useNowPlayingMovies";

const Browse = () => {

    console.log(getNowPayingMovies()
    );


    return <div>
        <Header />
        

        <Footer />
    </div>
}

export default Browse