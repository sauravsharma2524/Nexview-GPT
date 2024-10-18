import React from 'react'
import MovieLists from './MovieLists'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div>
      {(movies.nowPlayingMovies && movies.popularMovies && movies.topRatedMovies && movies.upcomingMovies) && 
        <div className='  bg-black'>
          <div className=' lg:pl-14 lg:-mt-52 md:-mt-52 xl:-mt-52 relative bg-transparent sm:-mt-52'>
          <MovieLists title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
            <MovieLists title={"Popular Movies"} movies={movies.popularMovies} />
            <MovieLists title={"Top Rated movies"} movies={movies.topRatedMovies} />
            <MovieLists title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          </div>
        </div>
      }
    
    </div>
  )
}

export default SecondaryContainer