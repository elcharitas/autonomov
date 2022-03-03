import React, { useState } from "react";

import { Box, Spinner, useColorModeValue } from "@chakra-ui/react";

const Base = ({ children, title }) => {
    const [loaded, setStatus] = useState(false);

    document.onreadystatechange = () => {
        if (document.readyState === "complete") {
            setStatus(true);
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
            {loaded ? children : <Spinner />}
        </Box>
    );
};

export default Base;
