import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext"



const Login = () => {

    const userLog = useContext(AuthContext);
    console.log(userLog)

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post("/api/login", {
            email: email,
            password: password
        })
            .then(res => {
                userLog.toggleAuth(res.data)
                alert("welcome back, " + res.data.email)
                navigate("/")
            })
            .catch((error) => {
                alert("access denied")
                console.log(error)
            });
    }

    return (
        <div>
            <h3>Welcome back!</h3>
            <p>Enter your email and password</p>
            <form onSubmit={handleLogin}>
                <div class="form-group">
                    <input onChange={handleEmailChange} value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <br />
                <div class="form-group">
                    <input onChange={handlePasswordChange} value={password} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;