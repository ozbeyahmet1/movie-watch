import { Movie2 } from "@/helpers/hooks/useFetchSingleMovie";
import { addToFavorites, removeFromFavorites } from "@/store/slices/favoritesSlice";
import { RootState } from "@/store/state";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function MovieDetailPageView(movie: Movie2) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favoritesReducer.favorites);

  const handleAddFavorite = (item: string) => {
    dispatch(addToFavorites(item));
  };

  const handleRemoveFavorite = (item: string) => {
    dispatch(removeFromFavorites(item));
  };
  return (
    <div className="px-10 pt-28 ">
      <div className="flex-col lg:flex-row flex items-start lg:space-x-10">
        <Image
          src={
            movie?.Poster !== "N/A"
              ? (movie?.Poster as string)
              : "https://res.cloudinary.com/droheqpxn/image/upload/v1730522656/660px-No-Image-Placeholder.svg_qofdqq.png"
          }
          width={500}
          height={720}
          alt=""
        />
        <div className="w-full">
          <div className="flex items-center justify-between w-full mb-4 lg:mb-10 mt-6 lg:mt-0">
            <p className="text-2xl lg:text-[60px] ">{movie?.Title}</p>
            <FaStar
              stroke="#B0DC00"
              strokeWidth={25}
              size={50}
              fill="transparent"
              className={`size-7 lg:size-10 cursor-pointer hover:fill-lime duration-300 ${favorites.includes(movie?.imdbID as string) ? "fill-lime" : ""}`}
              onClick={() => {
                favorites.includes(movie?.imdbID as string)
                  ? handleRemoveFavorite(movie?.imdbID as string)
                  : handleAddFavorite(movie?.imdbID as string);
              }}
            />
          </div>
          <div className="flex items-center space-x-3">
            {movie?.Genre?.split(", ").map((genre: string) => (
              <div className="flex items-center space-x-4">
                <p className="px-6 bg-lime text-black py-1 rounded-md">{genre}</p>
              </div>
            ))}
            <p>{movie?.Year}</p>
          </div>
          <div>
            <p className="text-base lg:text-2xl font-light mt-4">{movie?.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
