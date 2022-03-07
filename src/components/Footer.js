import React from "react";
import { Box, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

import { appName } from "../constants";

const Footer = ({ color }) => {
    return (
        <Box
            bgColor={useColorModeValue("black", "gray.50")}
            color={color}
            textAlign="center"
            p={16}
        >
            &copy;{" "}
            <Link as={RLink} color="red.500" to="/">
                {appName}
            </Link>
            . Built using &nbsp;
            <Link href="" color="red.500" to="/">
                IPFS
            </Link>
            , on the Polygon Mumbai Network
        </Box>
    );
};

export default Footer;
