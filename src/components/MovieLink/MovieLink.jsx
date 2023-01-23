import { NavLink } from "react-router-dom"

export const MovieLink = ({ id, title, name, state }) => {
    return (
        <li><NavLink to={`/movies/${id}`} state={state}>{title || name}</NavLink></li>
    )
};