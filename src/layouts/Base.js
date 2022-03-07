import React from "react";

import { Box, useColorModeValue } from "@chakra-ui/react";

const Base = ({ children, title }) => {
    if (title) {
        document.title = title;
    }
    return (
        <Box
            as="section"
            bg={useColorModeValue("gray.50", "gray.700")}
            minH="100vh"
        >
            {children}
        </Box>
    );
};

export default Base;
