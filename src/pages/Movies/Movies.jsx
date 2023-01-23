import { Suspense, useState } from "react";
import { MoviesSearchForm } from "../../components/MoviesSearchForm/MoviesSearchForm"
import { SearchedMovies } from "../../components/SearchedMovies/SearchedMovies";
import { Loader } from '../../components/Loader/Loader';

const Movies = () => {
    const [searchResult, setSearchResult] = useState('');

    return (
        <>
            <Suspense fallback={<Loader/>}>
            <MoviesSearchForm setSearchResult={setSearchResult} />
            <SearchedMovies searchResult={searchResult}/>
            </Suspense>
        </>
    )
};

export default Movies;
