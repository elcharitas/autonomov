import React from "react";
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";

import Page from "../layouts/Page";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Card from "../components/Card";

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
                    <Card mt={8} mr={0} ml={8} title="Video #2" />
                    <Card title="Video #2" />
                    <Card title="Video #2" />
                    <Card title="Video #2" />
                    <Card title="Video #2" />
                    <Card title="Video #2" />
                </Stack>
            </Box>
            <Footer color={color} />
        </Page>
    );
};

export default Home;
