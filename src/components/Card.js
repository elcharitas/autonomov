import React from "react";
import { chakra, Box, Flex, useColorModeValue } from "@chakra-ui/react";

import LogoImage from "../images/logo.png";

const Card = ({ image = LogoImage, title, ...rest }) => {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            mb={8}
            mx={8}
            w="sm"
            {...rest}
        >
            <Box
                bg="blackAlpha.900"
                h={80}
                w="full"
                rounded="lg"
                shadow="md"
                bgSize="cover"
                bgPos="center"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            ></Box>

            <Box
                w={{ base: 56, md: 64 }}
                bg={useColorModeValue("white", "gray.800")}
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
            >
                <chakra.h3
                    py={2}
                    textAlign="center"
                    fontWeight="bold"
                    textTransform="uppercase"
                    color={useColorModeValue("gray.800", "white")}
                    letterSpacing={1}
                >
                    {title}
                </chakra.h3>

                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    py={2}
                    px={3}
                    bg={useColorModeValue("gray.200", "gray.700")}
                >
                    <chakra.span
                        fontWeight="bold"
                        color={useColorModeValue("gray.800", "gray.200")}
                    >
                        $MATIC
                    </chakra.span>
                    <chakra.button
                        bg="gray.800"
                        fontSize="xs"
                        fontWeight="bold"
                        color="white"
                        px={2}
                        py={1}
                        rounded="lg"
                        textTransform="uppercase"
                        _hover={{
                            bg: useColorModeValue("gray.700", "gray.600"),
                        }}
                        _focus={{
                            bg: useColorModeValue("gray.700", "gray.600"),
                            outline: "none",
                        }}
                    >
                        Ding
                    </chakra.button>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Card;
