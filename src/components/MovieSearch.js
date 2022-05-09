import MovieDescription from "./Movie";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Box, Heading, Wrap } from "@chakra-ui/react";
import Movie from "./Movie";
import { useSelector } from "react-redux";
import axios from "axios";

const MovieSearch = () => {
  const { movie } = useParams();
  const [movieSearch, setMovieSearch] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=7571866020be0fc96f4cbd335eaa5117&query=${movie}`
      )
      .then((res) => setMovieSearch(res.data.results));
  }, [movie]);

  console.log(movieSearch);

  return (
      <Box marginTop={50} marginLeft={30} marginBottom={50}>
        <Heading as="h1" size="2xl" isTruncated marginBottom={30}>
          The Movie Squad
        </Heading>
        <Heading as="h3" size="lg" isTruncated marginBottom={25}>
          {movie}
        </Heading>
        <Wrap>
          {movieSearch.map((movie) => (
            <Movie key={movie.id} movieCard={movie} />
          ))}
        </Wrap>
      </Box>
  );
};

export default MovieSearch;
