import React, { useEffect } from 'react';
import useMovieTrailer from '../Hooks/useMovieTrailer';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import SecondaryContainer from "./SecondaryContainer";

const WatchMovie = () => {
  const { id } = useParams();

  // Call the custom hook directly in the component
  useMovieTrailer(id);

  const trailerVideo = useSelector((store) => store?.movies?.movieTrailer);

   
  return (
    <div>
      <Header />

      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=0&controls=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />

      <SecondaryContainer />

      <p>Now Watching Movie ID: {id}</p>
    </div>
  );
};



export default WatchMovie;
