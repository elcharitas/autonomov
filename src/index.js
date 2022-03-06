import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// core pages
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Fallback from "./pages/Stream";
import View from "./pages/View";
import "@fontsource/poppins";

// 2. Extend the theme to include custom colors, fonts, etc
const themeDict = {
    fonts: {
        body: "Poppins",
    },
    colors: {
        brand: {
            900: "#ff1166",
            800: "#ff1166",
            700: "#ff1166",
        },
    },
};
const theme = extendTheme(themeDict);

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/create"} element={<Upload />} />
                <Route path={"/watch/:id"} element={<View />} />
                <Route path={"/:fallback"} element={<Fallback />} />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>,
    document.getElementById("root")
);
