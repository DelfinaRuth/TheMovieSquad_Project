import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router";
import MovieSearch from "./MovieSearch";
import Movie from "./Movie";
import {
  Flex,
  Box,
  Stack,
  StackDivider,
  Wrap,
  SimpleGrid,
  GridItem,
  Text,
  Heading
} from "@chakra-ui/react";

const Home = () => {
  
  const navigate = useNavigate();
  const [input, setInput] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //query to search movies for popularity 
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7571866020be0fc96f4cbd335eaa5117&page=1`
      )
      .then((response) => setMovies(response.data.results));
  }, []);


  return (
    <Box marginTop={50} marginLeft={30} marginBottom={50}>
      <Heading marginBottom={30}>The Movie Squad</Heading>
      <Wrap>
        {movies.map((movie) => (
          <Movie key={movie.id} movieCard={movie} />
        ))}
      </Wrap>
    </Box>
  );
};

export default Home;
