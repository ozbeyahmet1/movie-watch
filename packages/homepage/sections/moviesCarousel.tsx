import { Movie } from "@/helpers/interfaces/movie";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cva } from "class-variance-authority";
import Card from "../components/card";

/**
 * Defines the styles for the carousel items using Class Variance Authority (CVA).
 * The styles vary based on the 'size' variant, which can be either 'large' or 'small'.
 */
const carouselItemStyles = cva("ml-5 first:ml-0", {
  variants: {
    size: {
      large: "basis-[75%] lg:basis-1/5", // Styles for large items
      small: "basis-1/2 lg:basis-[14%]", // Styles for small items
    },
  },
  defaultVariants: {
    size: "small", // Default size if none is specified
  },
});

/**
 * Props for the MovieCarousel component.
 * @interface MovieCarouselProps
 * @property {Array<Movie>} movies - The array of movie objects to display.
 * @property {"large" | "small"} [size] - The size variant for the carousel items (optional).
 */
interface MovieCarouselProps {
  movies: Array<Movie>;
  size?: "large" | "small"; // Optional size prop with default value 'small'
}

/**
 * Renders a carousel of movie cards.
 *
 * @param {MovieCarouselProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered carousel component containing movie cards.
 */
export function MovieCarousel({ movies, size = "small" }: MovieCarouselProps) {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {movies?.map((movie, index) => (
          <CarouselItem key={index} className={carouselItemStyles({ size })}>
            <Card {...movie} size={size} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
