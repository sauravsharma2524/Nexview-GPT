import { useEffect } from "react";
import { OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/MoviesSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        // fetching popular movies data 
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', OPTIONS) 
        const json = await data.json();
        
        // adding popular movies data to store 
        dispatch(addPopularMovies(json.results))

    }
    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopularMovies