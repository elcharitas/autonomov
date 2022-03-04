import React from "react";
import {
    chakra,
    Box,
    useColorModeValue,
    Flex,
    SimpleGrid,
    GridItem,
    VisuallyHidden,
    Input,
    Button,
    Stack,
    Icon,
} from "@chakra-ui/react";

import HeaderImage from "../images/header.jpg";

const Hero = () => {
    const Feature = (props) => (
        <Flex alignItems="center" color={useColorModeValue(null, "white")}>
            <Icon
                boxSize={4}
                mr={1}
                color="red.600"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                ></path>
            </Icon>
            {props.children}
        </Flex>
    );
    return (
        <Box
            mx="auto"
            bgImage={`url(${HeaderImage})`}
            bgSize={"cover"}
            bgPos={"center"}
        >
            <Box bg={useColorModeValue("blackAlpha.800", "whiteAlpha.900")}>
                <Box
                    px={8}
                    py={16}
                    w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                    textAlign={"center"}
                    mx="auto"
                >
                    <chakra.h1
                        mb={3}
                        fontSize={{ base: "4xl", md: "5xl" }}
                        fontWeight={{ base: "bold", md: "extrabold" }}
                        color={useColorModeValue("gray.100", "gray.900")}
                        lineHeight="shorter"
                    >
                        #1 Polygon Video dApp
                    </chakra.h1>
                    <chakra.p
                        mb={6}
                        fontSize={{ base: "lg", md: "xl" }}
                        color="gray.500"
                        lineHeight="base"
                    >
                        <chakra.span color={"red.500"}>Autonomov</chakra.span>{" "}
                        is introducing a new better way of video sharing on
                        Decentralized web...
                    </chakra.p>
                    <VisuallyHidden>Your Email</VisuallyHidden>
                    <Input
                        mt={0}
                        size="lg"
                        type="text"
                        textAlign={"center"}
                        color={useColorModeValue("gray.100", "gray.900")}
                        placeholder="Enter a $MATIC address..."
                        required={true}
                    />
                    <Stack
                        display="flex"
                        direction={{ base: "column", md: "row" }}
                        justifyContent={{ base: "start", md: "center" }}
                        my={3}
                        spacing={{ base: 2, md: 8 }}
                        fontSize="xs"
                        color="gray.600"
                    >
                        <Feature>Fully Decentralized</Feature>
                        <Feature>No Ads</Feature>
                        <Feature>Cancel anytime</Feature>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;
