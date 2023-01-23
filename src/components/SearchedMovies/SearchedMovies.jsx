import { useLocation } from "react-router-dom";
import { MovieLink } from "../MovieLink/MovieLink";

export const SearchedMovies = ({ searchResult }) => {
    const location = useLocation();

    if (searchResult) {
        const element = searchResult.map(({ id, title, name }) => <MovieLink key={id} id={id} state={{from: location}} title={title} name={name} />);
        return (
            <ul>{element}</ul>
        )
    }
    return;
};
