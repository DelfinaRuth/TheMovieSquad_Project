import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

//const theme = extendTheme({ colors });

ReactDOM.render(

  <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
 
  document.getElementById("root")
);
