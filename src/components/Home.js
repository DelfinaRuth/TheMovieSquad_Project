import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router";
import Movie from "./Movie";
import MovieWrap from "./MovieWrap"
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
      <Heading as="h1" size="2xl" marginBottom={30}>The Movie Squad</Heading>
      <Heading as="h3" size="lg" isTruncated marginBottom={25}>Popular movies</Heading>
      <MovieWrap movieSearch={movies}/>
    </Box>
  );
};

export default Home;
