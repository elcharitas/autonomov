import React, { useEffect } from "react";

import {
    Box,
    Center,
    Spinner,
    useColorModeValue,
    useBoolean,
} from "@chakra-ui/react";

const Base = ({ children, title }) => {
    const [loaded, setLoaded] = useBoolean(false);

    useEffect(() => {
        if (document.readyState !== "loading") {
            setLoaded.on();
        } else if (title) {
            document.title = title;
        }
    });

    return (
        <Box
            as="section"
            bg={useColorModeValue("gray.50", "gray.700")}
            minH="100vh"
        >
            {loaded ? (
                children
            ) : (
                <Center h="100vh">
                    <Spinner />
                </Center>
            )}
        </Box>
    );
};

export default Base;
