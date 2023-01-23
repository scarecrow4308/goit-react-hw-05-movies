import { Suspense, useEffect, useState } from "react";
import { MovieClass } from '../../api/moviesAPI';
import { Loader } from "../../components/Loader/Loader";
import { TrendingMoviesList } from "../../components/TrendingMoviesList/TrendingMoviesList";

const Home = () => {
    useEffect(() => {
        loadHomeMovies();
    }, []);

    const [data, setdata] = useState();

    const loadHomeMovies = async () => {
        const movies = new MovieClass();
        const result = await movies.fetchTrendingMovies();
        setdata(result.results);
    };

    return (
        <Suspense fallback={<Loader />}>
            <div>
                <h1>Trending today</h1>
                <TrendingMoviesList data={data} />
            </div>
        </Suspense>
    );
};

export default Home;
