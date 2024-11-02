import useFetchMovies from "@/helpers/hooks/useFetchMovies";
import { useState } from "react";
import Card from "../components/card";
import Pagination from "../components/pagination";

/**
 * Props for the MovieGrid component.
 * @interface IAppProps
 */

/**
 * MovieGrid component that fetches and displays a grid of movies.
 * It includes a search input to filter movies and pagination to navigate through the results.
 *
 * @param {IAppProps} props - The props for the component.
 * @returns {JSX.Element} The rendered MovieGrid component.
 */
export default function MovieGrid(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("Pokemon");
  const [finalInputValue, setFinalInputValue] = useState<string>("Pokemon");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const resultsPerPage = 10; // You can adjust this as needed

  /**
   * Handles page change events.
   *
   * @param {number} page - The new page number to navigate to.
   */
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const setHandleSearch = (text: string) => {
    setFinalInputValue(text);
  };

  // Fetch movies based on the search input and current page
  const { movies, totalResults } = useFetchMovies(`s=${finalInputValue.toLowerCase()}&page=${currentPage}`);

  // Calculate total pages based on the total results and results per page
  const totalPages = Math.ceil(+(totalResults as string) / resultsPerPage);

  return (
    <div className="w-full">
      <div className="w-full lg:w-2/3 flex items-center space-x-4 mb-6">
        <input
          type="text"
          className="w-full h-10 rounded-md border-lime border-2 border-solid bg-transparent outline-none focus:outline-none px-5 placeholder:text-[#ffffff92]"
          placeholder="Search for movies"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          className="bg-lime px-10 h-10 rounded-md text-black"
          onClick={() => {
            setHandleSearch(inputValue);
            setCurrentPage(1);
          }}>
          Search
        </button>
      </div>
      {totalResults && totalResults.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {movies.map((movie) => (
            <Card key={movie.imdbID} {...movie} />
          ))}
        </div>
      ) : (
        <div className="h-40 flex items-center justify-center">No Data Found</div>
      )}

      <div className="w-full flex items-center justify-center pt-12">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}
