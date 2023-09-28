import axios from "axios";

const API_KEY = "4aa3fd8db30994a6860649f1e8d70cd6";

// Action types
export const FETCH_NOW_PLAYING = "FETCH_NOW_PLAYING";
export const FETCH_POPULAR = "FETCH_POPULAR";
export const FETCH_TOP_RATED = "FETCH_TOP_RATED";
export const FETCH_UPCOMING = "FETCH_UPCOMING";

// Action creators
export const fetchNowPlaying = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    );
    dispatch({ type: FETCH_NOW_PLAYING, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchPopular = (page) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: API_KEY,
          page: page,
        },
      }
    );
    dispatch({ type: FETCH_POPULAR, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchTopRated = (page) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated`,
      {
        params: {
          api_key: API_KEY,
          page: page,
        },
      }
    );
    dispatch({ type: FETCH_TOP_RATED, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchUpcoming = (page) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming`,
      {
        params: {
          api_key: API_KEY,
          page: page,
        },
      }
    );
    dispatch({
      type: FETCH_UPCOMING,
      payload: response.data.results,
    });
  } catch (error) {
    console.error(error);
  }
};
