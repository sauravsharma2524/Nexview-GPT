import React from 'react'
import MovieCard from './MovieCard'

const MovieLists = ({ title, movies }) => {
    // console.log(movies[0].poster_path)
    return (
        <div className=''>
            <h1 className='text-white sticky py-1'>{title}</h1>
            <div className=' flex overflow-x-scroll '>
                {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
            </div>
        </div>
    )
}

export default MovieLists