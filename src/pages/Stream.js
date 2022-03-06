import React from "react";
import { Link as RLink } from "react-router-dom";
import {
    chakra,
    Box,
    Stack,
    Flex,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";
import Page from "../layouts/Page";

const Stream = () => {
    const bg = useColorModeValue("blackAlpha.900", "gray.50");
    const color = useColorModeValue("gray.50", "gray.700");
    return (
        <Page title="Not Found!">
            <Flex
                bg={bg}
                p={10}
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Flex justify="center" w="full">
                    <Box
                        w={{ base: "full", md: "75%", lg: "50%" }}
                        px={4}
                        py={20}
                        textAlign={{ base: "left", md: "center" }}
                    >
                        <chakra.span
                            fontSize={{ base: "3xl", sm: "4xl" }}
                            fontWeight="extrabold"
                            letterSpacing="tight"
                            lineHeight="shorter"
                            color={color}
                            mb={6}
                        >
                            <chakra.span display="block">
                                Page not Found!
                            </chakra.span>
                            <chakra.span
                                display="block"
                                color={useColorModeValue(
                                    "brand.600",
                                    "gray.500"
                                )}
                                fontSize=".9em"
                            >
                                Explore some premium content instead
                            </chakra.span>
                        </chakra.span>
                        <Stack
                            justifyContent={{ base: "left", md: "center" }}
                            direction={{ base: "column", sm: "row" }}
                            spacing={2}
                            mt={2}
                        >
                            <Box display="inline-flex" rounded="md" shadow="md">
                                <Link
                                    as={RLink}
                                    to="/"
                                    w="full"
                                    display="inline-flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    px={5}
                                    py={3}
                                    border="solid transparent"
                                    fontWeight="bold"
                                    rounded="md"
                                    color={useColorModeValue("white")}
                                    bg={useColorModeValue(
                                        "red.600",
                                        "brand.900"
                                    )}
                                    _hover={{
                                        bg: useColorModeValue(
                                            "brand.700",
                                            "brand.600"
                                        ),
                                    }}
                                >
                                    Start Now
                                </Link>
                            </Box>
                            <Box
                                ml={3}
                                display="inline-flex"
                                rounded="md"
                                shadow="md"
                            >
                                <Link
                                    as={RLink}
                                    to="/create"
                                    w="full"
                                    display="inline-flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    px={5}
                                    py={3}
                                    border="solid transparent"
                                    fontWeight="bold"
                                    rounded="md"
                                    color="brand.600"
                                    bg="white"
                                    _hover={{
                                        bg: "brand.50",
                                    }}
                                >
                                    Create Video
                                </Link>
                            </Box>
                        </Stack>
                    </Box>
                </Flex>
            </Flex>
        </Page>
    );
};

export default Stream;
