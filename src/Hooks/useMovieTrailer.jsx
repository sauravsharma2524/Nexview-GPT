import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { OPTIONS } from '../utils/constants';
import { addVideoTrailer } from '../utils/MoviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', OPTIONS)
        const json = await data.json();
        console.log(json)

        const filterData = json?.results.filter((video) => video.type === "Trailer");
        const trailerVideo = (filterData.length ? filterData[0] : json.results[0]);
        dispatch(addVideoTrailer(trailerVideo));
    }

    useEffect(() => {
        getMovieVideo();

    }, [])
}

export default useMovieTrailer