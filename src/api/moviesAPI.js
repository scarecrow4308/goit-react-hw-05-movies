import axios from "axios";

export class MovieClass {
  #API_KEY = "31f7347fdd134b657fbdaae56841ddf8";
  #BASE_URL = "https://api.themoviedb.org/3";

  async fetchSearchMovies(query) {
    try {
      const { data } = await axios.get(`${this.#BASE_URL}/search/movie`, {
        params: {
          query,
          api_key: this.#API_KEY,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
      console.log("cathced");
    }
  }

  async fetchSearchMoviesById(id) {
    try {
      const { data } = await axios.get(`${this.#BASE_URL}/movie/${id}`, {
        params: {
          api_key: this.#API_KEY,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
      console.log("cathced");
    }
  }

  async fetchMovieCast(id) {
    try {
      const { data } = await axios.get(
        `${this.#BASE_URL}/movie/${id}/credits`,
        {
          params: {
            api_key: this.#API_KEY,
          },
        }
      );
      return data;
    } catch (err) {
      console.log(err);
      console.log("cathced");
    }
  }

  async fetchMovieReviews(id) {
    try {
      const { data } = await axios.get(
        `${this.#BASE_URL}/movie/${id}/reviews`,
        {
          params: {
            api_key: this.#API_KEY,
          },
        }
      );
      return data;
    } catch (err) {
      console.log(err);
      console.log("cathced");
    }
  }

  async fetchTrendingMovies() {
    try {
      const { data } = await axios.get(`${this.#BASE_URL}/trending/all/day`, {
        params: {
          api_key: this.#API_KEY,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
      console.log("cathced");
    }
  }
}
