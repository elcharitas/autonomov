import React from "react";
import { Box } from "@chakra-ui/react";
import Page from "../layouts/Page";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <Page>
            <Hero />
            <Box>Hello World</Box>
        </Page>
    );
};

export default Home;
