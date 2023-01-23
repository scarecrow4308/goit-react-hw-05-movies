import { useEffect, useState } from "react";
import { useLocation,useSearchParams } from "react-router-dom";
import { MovieClass } from "../../api/moviesAPI";

export const MoviesSearchForm = ({ setSearchResult}) => {
    const [value, setValue] = useState('');
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();
    const movies = new MovieClass();

    useEffect(() => {
        if (location.search) {
        movies.fetchSearchMovies(location.search.substring(7)).then(data=> setSearchResult(data.results))
        }
    }, [])
    

    const handleChange = (value) => {
        setValue(value);
        setSearchParams(value.trim() !== '' ? { query: value.trim() } : {});
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await movies.fetchSearchMovies(value);
        setSearchResult(data.results);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}><input type="text" value={value} name='search' onChange={e=> handleChange(e.target.value)}/><button type="submit">Search</button></form>
    )
};
