import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userRegister } from "../store/user";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";

// const Login = () => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     dispatch(
//       userLogin({
//         email: email,
//         password: password,
//       })
//     )
//       .then((res) => {
//         alert("welcome, " + res.payload.email);
//         navigate("/");
//       })
//       .catch((err) => {
//         console.log(err)
//         alert("Try again...");
//       })
//   };

//   return (
//     <div>
//       <h3>Welcome back!</h3>
//       <p>Enter your email and password</p>
//       <form onSubmit={handleLogin}>
//         <div class="form-group">
//           <input
//             onChange={handleEmailChange}
//             value={email}
//             type="email"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//           />
//         </div>
//         <br />
//         <div class="form-group">
//           <input
//             onChange={handlePasswordChange}
//             value={password}
//             type="password"
//             class="form-control"
//             id="exampleInputPassword1"
//             placeholder="Password"
//           />
//         </div>
//         <br />
//         <button type="submit" class="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

export default function Login() {

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
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input onChange={handleEmailChange} value={email} type="email"/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={handlePasswordChange} value={password} type="password"/>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={"blue"} variant={"solid"} onClick={handleLogin}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
