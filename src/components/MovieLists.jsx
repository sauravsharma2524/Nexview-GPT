import React from 'react'
import MovieCard from './MovieCard'

const MovieLists = ({ title, movies }) => {
    return (
        <div className=''>
            <h1 className='text-white text-2xl font-light py-1'>{title}</h1>
            <div  className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex'>
                {movies.map(movie => <MovieCard key={movie.id} id={movie.id} posterPath={movie.poster_path} />)}
            </div>
            </div>
        </div>
    )
}

export default MovieLists