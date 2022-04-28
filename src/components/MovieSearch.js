import MovieDescription from "./Movie";
import { useState } from "react";
import { useNavigate } from "react-router";

//la prop sería mi array con las movies
const MovieSearch = ({ movies }) => {

    const navigate = useNavigate();
    const [description, setDescription] = useState("");

    const handleClic = (movie) => {
        setDescription(movie)
    }
    console.log(description)

    return (
        <div>
            {movies?.map((movie) => (
                <ul class="list-group">
                    <li key={movie.id} onClick={() => handleClic(movie)} class="list-group-item">{movie.title}</li>
                </ul>
            ))}
            {<MovieDescription description={description} />} 
            {/* ver si puede aparecer este componente como en un pop up con la info e imagen */}

        </div>
    );
}

export default MovieSearch;