        
import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    console.log(IMG_CDN+posterPath);
    
    return (
        <div className='w-44 rounded-lg p-1'>
            <img src={IMG_CDN + posterPath} alt="Movie Poster" />
        </div>
    )
}


export default MovieCard