import { ReactNode, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Input,
  Text,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, SearchIcon } from "@chakra-ui/icons";
import { MdGroupWork } from "react-icons/md";
import MovieSearch from "../components/MovieSearch";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const [movie, setMovieSearch] = useState("");

  const handleSearch = (e) => {
    setMovieSearch(e.target.value);
  };

  const handleMovieSearch = (e) => {
    e.preventDefault();

    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/search/movie?api_key=7571866020be0fc96f4cbd335eaa5117&query=${movie}`
    //   )
    //   .then((res) => {
    //     userSearch.toggleAuth2(res.data.results); //¿cómo usar múltiples contexts? esto no funciona
    //   });
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to={"/"}>
            <Icon as={MdGroupWork} w={8} h={8} color="red.500" />
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Input
                placeholder="Search a movie..."
                onChange={handleSearch}
                value={movie}
              />
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={<SearchIcon />}
                onClick={handleMovieSearch}
              />
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Stack
                flex={{ base: 1, md: 0 }}
                justify={"flex-end"}
                direction={"row"}
                spacing={6}
              >
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/login"}
                >
                  Sign In
                </Button>

                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"pink.400"}
                  href={"/register"}
                >
                  Sign Up
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
