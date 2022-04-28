import Favs from "./Favs";
import { useNavigate } from "react-router";
import { Flex, Box, Stack, Text, Image } from "@chakra-ui/react";

const Movie = ({ movieCard }) => {
  // const handleFavs = () => {
  //     <Favs movie={movie}/>
  //     navigate("/favs")
  // }

  const poster = "https://image.tmdb.org/t/p/w500/" + movieCard.poster_path;

  return (
    <Box p="5" maxW="250px" borderWidth="1px">
      <Image src={poster} />
      <Text>{movieCard.title}</Text>
      <Text>{movieCard.vote_average}</Text>
      {/* <Text>{movieCard.overview}</Text> */}
    </Box>
  );
};

export default Movie;