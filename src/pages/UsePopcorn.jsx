import styles from "./UsePopcorn.module.css";
import { useState } from "react";
import Box from "../components/UsePopcorn/Box";
import { NavBar, Search, NumResults } from "../components/UsePopcorn/NavBar";
import {
  WatchedMoviesList,
  WatchedSummary,
} from "../components/UsePopcorn/Watched";
import ErrorMessage from "../components/UsePopcorn/ErrorMessage";
import Loader from "../components/UsePopcorn/Loader";
import MovieList from "../components/UsePopcorn/MovieList";
import MovieDetails from "../components/UsePopcorn/MovieDetails";
import { useMovies } from "../components/UsePopcorn/useMovies";
import { useLocalStorage } from "../components/UsePopcorn/useLocalStorage";

export default function UsePopcorn() {
  const [watched, setWatched] = useLocalStorage([], "watched");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query, () =>
    setSelectedId(null)
  );

  function handleMovieSelection(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
    // local storage
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleRemoveWatched(movie) {
    setWatched((watched) => watched.filter((m) => m.imdbID !== movie.imdbID));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && !error && <Loader />}
          {error && <ErrorMessage errorMessage={error} />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onMovieSelection={handleMovieSelection}
            />
          )}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={() => setSelectedId(null)}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onRemoveFromWatched={handleRemoveWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function Main({ children }) {
  return <main className={styles.main}>{children}</main>;
}
