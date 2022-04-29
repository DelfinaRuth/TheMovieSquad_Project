import MovieDescription from "./Movie";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Heading, Wrap } from "@chakra-ui/react";
import Movie from "./Movie";

//la prop sería mi array con las movies
const MovieSearch = ({ movie }) => {

  <Box marginTop={50} marginLeft={30} marginBottom={50}>
    <Heading marginBottom={30}>The Movie Squad</Heading>
    <Wrap>
      {movie.map((movie) => (
        <Movie key={movie.id} movieCard={movie} />
      ))}
    </Wrap>
  </Box>;
};

export default MovieSearch;
