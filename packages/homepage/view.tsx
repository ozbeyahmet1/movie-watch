"use client";
import useFetchMovies from "@/helpers/hooks/useFetchMovies";
import HeroSection from "./sections/heroSection";
import MovieGrid from "./sections/movieGrid";
import { MovieCarousel } from "./sections/moviesCarousel";

export default function HomepageView() {
  const { movies, loading, error } = useFetchMovies("s=movie&y=$2024&page=3");
  const { movies: generalMovies } = useFetchMovies("s=movie&y=$2024&page=1");
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <div className="px-6 lg:px-10 py-12 lg:py-28">
        <div className="pb-6">
          <h2 className="text-lime text-2xl mb-3">Online Streaming</h2>
          <h3 className="text-3xl">Upcoming Movies</h3>
        </div>
        <MovieCarousel movies={movies} size="large" />
        <div className="mt-24">
          <MovieCarousel movies={generalMovies} size="small" />
        </div>
        <div className="mt-20">
          <MovieGrid />
        </div>
      </div>
    </div>
  );
}
