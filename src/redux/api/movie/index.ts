import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    movie: build.query<MOVIE.GetMovieResponse[], MOVIE.GetMovieRequest>({
      query: () => ({
        url: `movie/`,
        method: "GET",
      }),
      providesTags: ["movie"],
    }),
    getOneMovie: build.query<MOVIE.GetMovieResponse, string | number>({
      query: (id) => ({
        url: `movie/${id}`,
        method: "GET",
      }),
      providesTags: ["movie"],
    }),
  }),
});

export const { useMovieQuery, useGetOneMovieQuery } = api;
