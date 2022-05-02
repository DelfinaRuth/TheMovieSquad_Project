import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userRegister } from "../store/user";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(
      userLogin({
        email: email,
        password: password,
      })
    )
      .then((res) => {
        alert("welcome, " + res.payload.email);
        navigate("/");
      })
      .catch((err) => {
        console.log(err)
        alert("Try again...");
      })
  };

  return (
    <div>
      <h3>Welcome back!</h3>
      <p>Enter your email and password</p>
      <form onSubmit={handleLogin}>
        <div class="form-group">
          <input
            onChange={handleEmailChange}
            value={email}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            onChange={handlePasswordChange}
            value={password}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
