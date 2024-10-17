import React from 'react'
import MovieLists from './MovieLists'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  console.log(movies);  
  return (
    <div className='flex lg:-mt-52 md:-mt-52 xl:-mt-52 sm:-mt-52 overflow-scroll relative text-white font-thin text-2xl bg-black'>{ movies.nowPlayingMovies &&
      <MovieLists title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />}
    </div>
  )
}

export default SecondaryContainer