import Favs from "./Favs";
import { useNavigate } from "react-router";
import { Flex, Box, Stack, Text, Image } from "@chakra-ui/react";

const Movie = ({ movieCard }) => {

  const poster = "https://image.tmdb.org/t/p/w500/" + movieCard.poster_path;
  console.log(movieCard)

  return movieCard.poster_path ? (
    
    <Box p="4" maxW="300px" borderWidth="1px">
      <Image src={poster} />
      <Text>{movieCard.title}</Text>
      <Text>{movieCard.vote_average}</Text>
      {/* <Text>{movieCard.overview}</Text> */}
    </Box>
  ) : (<></>)
};

export default Movie;
