import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";

import Page from "../layouts/Page";
import Hero from "../components/Hero";
import Card from "../components/Card";

const videos = [];

const Home = () => {
    const bg = useColorModeValue("blackAlpha.900", "gray.50");
    const color = useColorModeValue("gray.50", "gray.700");

    return (
        <Page>
            <Hero />
            <Box bgColor={bg} color={color} h="99%" p={8}>
                <Stack
                    direction="row"
                    spacing={8}
                    justifyContent="center"
                    alignItems="center"
                    wrap="wrap"
                    mx="auto"
                >
                    {videos.map(({ title, poster }, id) => (
                        <Link to={"/watch/" + id}>
                            <Card key={id} title={title} image={poster} />
                        </Link>
                    ))}
                </Stack>
            </Box>
        </Page>
    );
};

export default Home;
