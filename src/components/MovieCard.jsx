        
import React from 'react'
import { IMG_CDN } from '../utils/constants'
import useMovieTrailer from '../Hooks/useMovieTrailer'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ posterPath, id }) => {
    
    const navigate = useNavigate();

    return (
        <div  className='w-48 rounded-lg p-1'>
            <button onClick={() => navigate(`/watch/${id}`) } className='bg-red-500'>play now</button>
            <img src={IMG_CDN + posterPath}  alt="Movie Poster" />
        </div>
    )
}


export default MovieCard