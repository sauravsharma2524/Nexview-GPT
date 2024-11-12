import React from 'react';
import { IMG_CDN } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ posterPath, id }) => {
    const navigate = useNavigate();

    return (
        <div
            className="relative w-48 h-72 rounded-lg p-1 overflow-hidden group cursor-pointer transition-transform duration-200 transform hover:scale-95"
            onClick={() => navigate(`/watch/${id}`)}
        >
            <img
                src={IMG_CDN + posterPath}
                alt="Movie Poster"
                className="w-full h-full rounded-lg object-cover"
            />

            {/* Play Now Button */}
            <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                bg-gradient-to-t from-black/80 to-transparent rounded-lg"
            >
                <button
                    className="px-6 py-2 text-white font-semibold rounded-full backdrop-blur-sm bg-white/20 hover:bg-white/30 
                    shadow-lg transform transition-transform duration-300 hover:scale-110"
                >
                    Play Now
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
