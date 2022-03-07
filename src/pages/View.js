import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Box,
    Center,
    useBreakpointValue,
    useColorModeValue,
} from "@chakra-ui/react";
import Plyr from "plyr";

import Page from "../layouts/Page";
import Stream from "./Stream";
import { getVideo } from "../utils/contract";

const View = () => {
    const [title, setTitle] = useState();
    const [poster, setPoster] = useState("");
    const [videoSource, setSource] = useState("");

    const [err, setError] = useState("");
    const { pathname } = useLocation();
    const id = pathname.split("/").reverse()[0];

    setTimeout(Plyr.setup, 50, "#player");

    getVideo(id)
        .then((data) => {
            try {
                const { title, poster } = JSON.parse(data);
                setTitle(title);
                setPoster(poster);
            } catch (e) {
                setError(e);
            }
        })
        .catch(setError);
    return (
        <Page>
            <Box bg={useColorModeValue("gray.50", "inherit")}>
                <Box display={"flex"}>
                    <Box w={useBreakpointValue({ base: "full", md: "60vw" })}>
                        <video
                            playsInline
                            controls
                            id="player"
                            data-poster={poster}
                        >
                            {videoSource ? (
                                <source
                                    src={videoSource}
                                    type="video/mp4"
                                ></source>
                            ) : (
                                ""
                            )}
                        </video>
                        <Box>{title}</Box>
                    </Box>
                </Box>
                <Center>{title}</Center>
            </Box>
        </Page>
    );
};

export default View;
