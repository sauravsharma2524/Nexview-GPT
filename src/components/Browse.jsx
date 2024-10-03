import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import getNowPayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    console.log(getNowPayingMovies()
    );


    return <div>
        <Header />
        <MainContainer />
        <SecondaryContainer/>
        <Footer />
    </div>
}

export default Browse