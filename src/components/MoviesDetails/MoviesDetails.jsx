import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect } from "react";
import { MovieClass } from '../../api/moviesAPI';
import { Image, Wrapper, MainContent, Overview, Genres } from './MovieDetails.styled';

const MoviesDetails = ({movie, setMovie}) => {
    const { moviesId } = useParams();
    const location = useLocation();
    useEffect(() => {
        fetchMovie();
    }, [moviesId]);

    const movies = new MovieClass();

    const fetchMovie = async () => {
        const data = await movies.fetchSearchMoviesById(moviesId);
        setMovie(data);
        console.log(data);
    }

    if (!movie) return;

    const { poster_path, name, title, vote_average, overview, genres } = movie;

    return (
        <Suspense fallback={null}>
            <Link to={location.state ? location.state.from : '/home'}>Go back</Link>
            <MainContent>
                <Image src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie" />
                <Wrapper>
                    <h2>{name || title}</h2>
                    <p>User score {vote_average}</p>
                    <Overview>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                    </Overview>
                    <div>
                        <h3>Genres</h3>
                        <Genres>{genres.map(el => <li key={el.id}> {el.name} </li>)}</Genres>
                    </div>
                </Wrapper>
            </MainContent>
            <hr />
            <div>
                <p>Additional information</p>
                <ul>
                    <li><Link to='cast' state={location.state}>Cast</Link></li>
                    <li><Link to='reviews' state={location.state}>Reviews</Link></li>
                </ul>
            </div>
            <hr />
            <Outlet />
        </Suspense>
    );
};

export default MoviesDetails;