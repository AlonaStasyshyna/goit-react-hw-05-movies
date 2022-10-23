import axios from 'axios';
import { mapper } from 'utils/mapper';

const api_key = 'f2adf6f643aa7936267884505488a932';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const { data } = await axios('/trending/movie/day', {
    params: { api_key },
  });

  return mapper(data.results);
};

export const fetchSearchMovie = async query => {
  const { data } = await axios('/search/movie', {
    params: { api_key, query },
  });

  return mapper(data.results);
};

export const fetchMovieById = async (id, paramName) => {
  const resp = await axios(`/movie/${id}${paramName}`, {
    params: { api_key },
  });

  return resp.data;
};
