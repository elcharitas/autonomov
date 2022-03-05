import React from "react";

import {
    Box,
    Center,
    Spinner,
    useColorModeValue,
    useBoolean,
} from "@chakra-ui/react";

const Base = ({ children, title }) => {
    const [loaded, setLoaded] = useBoolean(false);

    document.onreadystatechange = () => {
        if (document.readyState !== "loading") {
            setLoaded.on();
        } else if (title) {
            document.title = title;
        }
    };

    return (
        <Box
            as="section"
            bg={useColorModeValue("gray.50", "gray.700")}
            minH="100vh"
        >
            {loaded ? (
                children
            ) : (
                <Center>
                    <Spinner />
                </Center>
            )}
        </Box>
    );
};

export default Base;
