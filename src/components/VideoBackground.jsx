import React from 'react'
import { useEffect } from 'react'
import { OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addVideoTrailer } from '../utils/MoviesSlice'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer'
import VideoTitle from './VideoTitle'
const VideoBackground = ({ movieId }) => {

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

       
      </div>
    </div>
  )
}
export default VideoBackground