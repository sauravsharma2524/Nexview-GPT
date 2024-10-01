import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {addNowPlayingMovies} from "../utils/MoviesSlice"

const useNowPlayingMovies = () => {
    // getting the movies data
    const dispatch = useDispatch();


    const getNowPayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS);
        const json = await data.json();
        console.log(json.results)
        dispatch(addNowPlayingMovies(json.results))
        console.log(addNowPlayingMovies(json.results));
        
    }
    useEffect(() => {
        getNowPayingMovies()
    }, []);
}





export default useNowPlayingMovies;