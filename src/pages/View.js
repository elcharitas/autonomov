import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Plyr from "plyr";

import Page from "../layouts/Page";

const View = () => {
    setTimeout(Plyr.setup, 500, "#player");
    return (
        <Page>
            <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
                <Box>
                    <video id="player"></video>
                </Box>
            </Box>
        </Page>
    );
};

export default View;
