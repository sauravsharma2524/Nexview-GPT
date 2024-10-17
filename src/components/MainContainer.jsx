import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    console.log(movies);

    if (!movies) return;

    const mainMovie = movies[0];
    console.log(mainMovie?.overview);

    return (
        <div className="z-10">
            <VideoTitle title={mainMovie?.original_title} overview={mainMovie?.overview} />
            <VideoBackground movieId={mainMovie?.id} />
            {/* <SecondaryContainer/> */}
        </div>
    )
};

export default MainContainer;