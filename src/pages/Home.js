import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";

import Page from "../layouts/Page";
import Hero from "../components/Hero";
import Card from "../components/Card";
import LogoImage from "../images/logo.png";
import { getVideo } from "../utils/contract";

const videos = [];

const Home = () => {
    const bg = useColorModeValue("blackAlpha.900", "gray.50");
    const color = useColorModeValue("gray.50", "gray.700");
    setTimeout(() => {
        getVideo(1).then(async (data) => {
            try {
                videos[0] = JSON.parse(data);
                videos[0].video = videos[0];
            } catch (e) {}
        });
    });
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
                            <Card title={title} image={poster} />
                        </Link>
                    ))}
                </Stack>
            </Box>
        </Page>
    );
};

export default Home;
