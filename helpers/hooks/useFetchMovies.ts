import { useEffect, useState } from "react";
import { Movie } from "../interfaces/movie";

/**
 * @interface MovieResponse
 * Represents the response structure from the OMDb API for movie search results.
 */
interface MovieResponse {
  Search: Array<Movie>;
  totalResults: string;
  Response: string;
  Error?: string;
}

/**
 * Custom hook to fetch movies from the OMDb API based on a search title.
 *
 * @param {string} title - The title of the movie(s) to search for.
 * @returns {{
 *   movies: Movie[];
 *   loading: boolean;
 *   error: string | null;
 * }} An object containing the movie data, loading state, and error message (if any).
 */
const useFetchMovies = (query: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Do not proceed if the title is empty

    /**
     * Fetches movies from the OMDb API based on the provided title.
     * Sets the loading, movies, and error states accordingly.
     */
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}${query ? `&${query}` : ""}`,
        );
        const data: MovieResponse = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
          setError(null);
        } else {
          setError(data.Error || "Movies not found");
          console.log("data.Error", data.Error);
          setMovies([]);
        }
      } catch (error) {
        setError("An error occurred while fetching data");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return { movies, loading, error };
};

export default useFetchMovies;
