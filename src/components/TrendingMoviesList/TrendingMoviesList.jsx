import { MovieLink } from "../MovieLink/MovieLink";
import { useLocation } from "react-router-dom";

export const TrendingMoviesList = ({ data }) => {
    const location = useLocation()
    if (data) {
        const element = data.map(({ id, title, name }) => <MovieLink key={id} state={{from: location}} id={id} title={title} name={name} />);
        return (
            <ul>{element}</ul>
        )
    }
    return;
};
