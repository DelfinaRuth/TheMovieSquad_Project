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
          alert("Hmm, that didn't work out. Please, try again...");
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
          src={"https://cdn.pixabay.com/photo/2020/06/15/15/34/science-5302286_960_720.jpg"
          }
        />
      </Flex>
    </Stack>
  );
}
