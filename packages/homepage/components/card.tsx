import { Movie } from "@/helpers/interfaces/movie";
import { addToFavorites, removeFromFavorites } from "@/store/slices/favoritesSlice";
import { RootState } from "@/store/state";
import { cva } from "class-variance-authority";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
const cardStyles = cva("mb-4 w-full", {
  variants: {
    size: {
      large: "h-[360px]",
      small: "h-[240px]",
    },
  },
  defaultVariants: {
    size: "small",
  },
});
interface CardProps extends Movie {
  size?: "large" | "small";
}

export default function Card({ Poster, Title, Type, Year, size = "large", imdbID }: CardProps) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favoritesReducer.favorites);

  const handleAddFavorite = (item: string) => {
    dispatch(addToFavorites(item));
  };

  const handleRemoveFavorite = (item: string) => {
    dispatch(removeFromFavorites(item));
  };
  return (
    <div>
      <a href={`/movie/${imdbID}`}>
        <Image
          src={
            Poster !== "N/A"
              ? Poster
              : "https://res.cloudinary.com/droheqpxn/image/upload/v1730522656/660px-No-Image-Placeholder.svg_qofdqq.png"
          }
          width={250}
          height={360}
          alt=""
          className={cardStyles({ size })}
        />
      </a>
      {size === "large" && (
        <div>
          <div className="flex items-start justify-between mb-4 h-12">
            <h3 className="text-xl">{Title}</h3>
            <p className="text-lime">{Year}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="px-2 py-[2px] text-white border-solid border-[1px] w-fit font-bold h-6 flex items-center justify-center border-white">
              HD
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <IoMdTime fill="#B0DC00" />
                <p>1 hr 33 min</p>
              </div>
              <FaStar
                stroke="#B0DC00"
                strokeWidth={25}
                fill="transparent"
                className={`cursor-pointer hover:fill-lime duration-300 ${favorites.includes(imdbID) ? "fill-lime" : ""}`}
                onClick={() => {
                  favorites.includes(imdbID) ? handleRemoveFavorite(imdbID) : handleAddFavorite(imdbID);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
