import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../store/user";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //ver de agregar hook useInput()
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //agregar validaciones
    dispatch(
      userRegister({
        email: email,
        password: password,
      })
    )
      .then((data) => {
        console.log(data);
        alert("Thanks for signing up to TMDB 🎬");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Password or email wrong, please do it again");
        navigate("/register");
      });
  };

  return (
    <div>
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            onChange={handleEmailChange}
            value={email}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
          />
        </div>
        <br />
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            onChange={handlePasswordChange}
            value={password}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
