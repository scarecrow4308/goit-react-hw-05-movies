import { Suspense, useEffect, useState } from "react";
import { MovieClass } from "../../api/moviesAPI";
import { Loader } from "../Loader/Loader";
import { CastItem } from "./CastItem/CastItem";
import { CastList } from "./MovieCast.styled";

const MovieCast = ({ movie }) => {
    const movieFetch = new MovieClass();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        fetchCast();
    }, [])
    const fetchCast = async() => {
        const data = await movieFetch.fetchMovieCast(movie.id);
        setCast(data.cast.slice(0,12));
    }

    if (!cast) return;
    return (
        <Suspense fallback={<Loader/>}>
            <div>
                <CastList>{cast.map(actor => <li key={actor.id}><CastItem actor={actor} /></li>)}</CastList>
            </div>
        </Suspense>
    );
};

export default MovieCast;