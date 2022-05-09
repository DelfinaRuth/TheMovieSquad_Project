import { Wrap } from "@chakra-ui/react";
import Movie from "./Movie";

const MovieWrap = ({movieSearch}) => {
    return(
        <Wrap>
          {movieSearch.map((movie) => (
            <Movie key={movie.id} movieCard={movie} />
          ))}
        </Wrap>
    );
}

export default MovieWrap;