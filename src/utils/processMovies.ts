import { Movie } from "../redux/types/types";

export type MovieInput = {
  id: string;
  name: string;
  banner: string;
  img_url: string;
  rating: string;
  duration: string;
  year: string;
  storyline: string;
  link: string;
  fantastic: string;
  action: string;
  romantic: string;
  adventure: string;
  horror: string;
  thriller: string;
  comedy: string;
  drama: string;
  filter: string;
};

const genreFields = [
  "fantastic",
  "action",
  "romantic",
  "adventure",
  "horror",
  "thriller",
  "comedy",
  "drama",
];

export const processMovieData = (inputData: MovieInput[]): Movie[] => {
  return inputData.map((movie) => {
    const categories = genreFields
      .filter((field) => movie[field as keyof MovieInput] === "2")
      .map((field) =>
        field === "fantastic" ? "fantasy" : field.toLowerCase()
      );

    return {
      id: movie.id,
      name: movie.name,
      banner: movie.banner,
      img_url: movie.img_url,
      rating: movie.rating,
      duration: movie.duration,
      year: movie.year,
      storyline: movie.storyline,
      link: movie.link,
      categories,
      filter: movie.filter,
    };
  });
};
