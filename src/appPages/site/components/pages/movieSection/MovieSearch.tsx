import React, { useState } from "react";
import { useMovieQuery } from "@/redux/api/movie";

const MovieSearch = () => {
  const [query, setQuery] = useState<string>("");
  const { data } = useMovieQuery();

  const filteredMovies = data?.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск фильма..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {filteredMovies?.map((movie, index) => (
          <div key={index}>
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
