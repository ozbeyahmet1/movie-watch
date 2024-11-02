"use client";
import useFetchSinlgeMovie, { Movie2 } from "@/helpers/hooks/useFetchSingleMovie";
import MovieDetailPageView from "@/packages/movieDetail/view";
import { store } from "@/store/state";

import { useParams } from "next/navigation";
import { Provider } from "react-redux";

export default function MoviesCarousel() {
  const params = useParams<{ url: string }>();
  const { movie } = useFetchSinlgeMovie(params.url);

  return (
    <Provider store={store}>
      <MovieDetailPageView {...(movie as Movie2)} />
    </Provider>
  );
}
