import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// core pages
import Home from "./pages/Home";
import "@fontsource/poppins";

// 2. Extend the theme to include custom colors, fonts, etc
const themeDict = {
    fonts: {
        body: "Poppins",
    },
    colors: {
        brand: {
            900: "#0f9200",
            800: "#30cb00",
            700: "#4ae54a",
        },
    },
};
const theme = extendTheme(themeDict);

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>,
    document.getElementById("root")
);
