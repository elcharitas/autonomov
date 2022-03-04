import React from "react";
import { Link } from "react-router-dom";
import { Box, VisuallyHidden } from "@chakra-ui/react";

import { appName } from "../constants";
import LogoImage from "../images/logo.png";

const Logo = ({ width, height = null }) => {
    return (
        <Link to="/">
            <Box
                bgImage={`url(${LogoImage})`}
                bgSize="cover"
                bgPos={"center"}
                width={width}
                height={height ? height : width}
            >
                &nbsp;
            </Box>
            <VisuallyHidden>{appName}</VisuallyHidden>
        </Link>
    );
};

export default Logo;
