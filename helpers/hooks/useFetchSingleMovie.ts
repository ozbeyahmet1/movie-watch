import { useEffect, useState } from "react";

export interface Rating {
  Source: string;
  Value: string;
}

export interface Movie2 {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

/**
 * @interface MovieResponse
 * Represents the response structure from the OMDb API for single movie details.
 */
interface MovieResponse extends Movie2 {}

/**
 * Custom hook to fetch a single movie from the OMDb API based on the IMDb ID.
 *
 * @param {string} imdbID - The IMDb ID of the movie to fetch.
 * @returns {{
 *   movie: Movie2 | null;
 *   loading: boolean;
 *   error: string | null;
 * }} An object containing the movie data, loading state, and error message (if any).
 */
const useFetchSingleMovie = (imdbID: string) => {
  const [movie, setMovie] = useState<Movie2 | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!imdbID) return;

    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&i=${imdbID}`,
        );
        const data: MovieResponse = await response.json();

        if (data.Response === "True") {
          setMovie(data);
          setError(null);
        } else {
          setMovie(null);
        }
      } catch (error) {
        setError("An error occurred while fetching data");
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [imdbID]);

  return { movie, loading, error };
};

export default useFetchSingleMovie;
