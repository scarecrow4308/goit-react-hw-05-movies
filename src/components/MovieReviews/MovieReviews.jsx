import { Suspense, useEffect, useState } from "react";
import { MovieClass } from "../../api/moviesAPI";


const MovieReviews = ({ movie }) => {
    const movieFetch = new MovieClass();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetchReviews();
    }, [])
    const fetchReviews = async() => {
        const data = await movieFetch.fetchMovieReviews(movie.id);
        setReviews(data.results);
    }

    if (!reviews) {
        return (
            <div>
                <h2>No review founded :(</h2>
            </div>
        );
    };
     
    return (
        <Suspense>
            <div>
                <ul>{reviews.map(({id, author, content})=> <li key={id}>
                    <h2>Author: {author}</h2>
                    <p>{content}</p>
                </li>)}</ul>
            </div>
        </Suspense>
    );
};

export default MovieReviews;