import React from "react";
import { Box } from "@chakra-ui/react";

import { appName } from "../constants";
import LogoImage from "../images/logo.png";

const Logo = ({ width, height = null }) => {
    return (
        <Box
            bgImage={`url(${LogoImage})`}
            bgSize="cover"
            bgPos={"center"}
            width={width}
            height={height ? height : width}
        >
            &nbsp;
        </Box>
    );
};

export default Logo;
