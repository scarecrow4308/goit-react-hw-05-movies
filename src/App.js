import { useState, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./App.styled";

const Movies = lazy(() => import("./pages/Movies/Movies"));
const Layout = lazy(() => import("./pages/Layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const MoviesDetails = lazy(() =>
  import("./components/MoviesDetails/MoviesDetails")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

export const App = () => {
  const [movie, setMovie] = useState();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route
            path="/movies/:moviesId"
            element={<MoviesDetails setMovie={setMovie} movie={movie} />}
          >
            <Route path="cast" element={<MovieCast movie={movie} />} />
            <Route path="reviews" element={<MovieReviews movie={movie} />} />
          </Route>
        </Route>
        <Route path="*" element={<div>Wrong adress:( Please try again.</div>} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
