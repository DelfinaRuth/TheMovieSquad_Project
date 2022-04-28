import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";


const Favs = ({movie}) => {

    const userLog = useContext(AuthContext);
    const { toggleAuth, isLoggedIn, isAuthenticated } = userLog;
    const user = isLoggedIn.user;
    const [favs, setFavs] = useState();

    console.log(isLoggedIn)

        axios.post("/api/favs", {
            movie : movie.title,
            idTmdb: movie.id,
            email: user
        })
        .then(res => console.log(res.data))
        

    return (
        <h1>FAVS</h1>
    );
}

export default Favs;