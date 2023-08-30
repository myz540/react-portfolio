import Movie from "./Movie";
import styles from "../../pages/UsePopcorn.module.css";

export default function MovieList({ movies, onMovieSelection }) {
  return (
    <ul className={`${styles.list} ${styles.listMovies}`}>
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onMovieSelection={onMovieSelection}
        />
      ))}
    </ul>
  );
}
