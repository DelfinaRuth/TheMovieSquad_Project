import { ReactNode } from "react";
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

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to={"/"}>
            <Icon as={MdGroupWork} w={8} h={8} color="red.500" />
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Input placeholder="Search a movie..." />
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={<SearchIcon />}
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
