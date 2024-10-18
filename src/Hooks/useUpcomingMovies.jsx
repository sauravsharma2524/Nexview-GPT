import { useDispatch } from "react-redux"
import { OPTIONS } from "../utils/constants"
import { addUpcomingMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();


    const getUpcomingMovies = async () => {
        // Upcoming movies data fetching 
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', OPTIONS)
        const json = await data.json();

        // adding addUpcomingMovies data to store 
        dispatch(addUpcomingMovies(json.results))

    }

    useEffect(() => {
        getUpcomingMovies();
    }, [])

}

export default useUpcomingMovies