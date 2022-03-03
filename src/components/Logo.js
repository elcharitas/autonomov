import React from "react";
import { Image } from "@chakra-ui/react";

import { appName } from "../constants";
import LogoImage from "../images/logo.png";

const Logo = ({ width, height }) => {
    return <Image src={LogoImage} w={width} h={height} alt={appName} />;
};

export default Logo;
