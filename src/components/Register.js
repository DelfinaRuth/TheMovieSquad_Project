import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";



const Register = () => {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const navigate = useNavigate();

    const userLog = useContext(AuthContext);
    const { toggleAuth, isLoggedIn, isAuthenticated } = userLog;


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("/api/register", {
                email: email,
                password: password
            })
            .then(res => toggleAuth(res.data))
            .catch((error) => console.log(error))
            navigate("/")
            alert("Thanks for signing up to TMDB 🎬")
          
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit} >
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input onChange={handleEmailChange} value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                </div>
                <br />
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={handlePasswordChange} value={password} type="password" class="form-control" id="exampleInputPassword1" name="password" />
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Sign up</button>
            </form>
        </div>
    );
}

export default Register;