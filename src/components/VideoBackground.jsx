import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {

  const movie = useSelector((store) => store.movies?.nowPlayingMovies)
  const mainMovie = movie[0];
  const trailerVideo = useSelector((store) => store?.movies?.movieTrailer)
  
  useMovieTrailer(movieId);

  return (
    <div className=''>
      <iframe
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      // allowFullScreen>
      >
      </iframe>
      <div>

        <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white w-full  lg:hidden md:hidden sm:hidden">
          <div className="flex-col p-2">
            <h1 className="text-3xl font-bold mb-2 tracking-wide">
              {mainMovie.original_title}
            </h1>
            <p className="p-2 bg-opacity-60 bg-black text-base rounded-lg shadow-md max-w-[90%] leading-relaxed">
              {mainMovie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VideoBackground