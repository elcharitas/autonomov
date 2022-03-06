import React from "react";
import { Box, Flex, Divider, useColorModeValue } from "@chakra-ui/react";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { HiCollection } from "react-icons/hi";
import { MdHome } from "react-icons/md";

import NavItem from "./NavItem";
import Logo from "./Logo";

const Sidebar = (props) => {
    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg={useColorModeValue("blackAlpha.900", "gray.800")}
            borderColor={useColorModeValue("blackAlpha.900", "gray.700")}
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center" justify={"space-around"}>
                <Logo width={"120px"} />
            </Flex>
            <Divider />
            <Flex
                direction="column"
                as="nav"
                py="2em"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
                borderTop={"1px"}
                borderColor={useColorModeValue("whiteAlpha.400", "gray.700")}
            >
                <NavItem icon={MdHome} href="/">
                    Home
                </NavItem>
                <NavItem icon={HiCollection}>Explore</NavItem>
                <NavItem icon={FaRss}>Trending</NavItem>
                <Divider py="1em" mb="1.5em" />
                <NavItem icon={HiCollection}>Collections</NavItem>
                <NavItem icon={FaClipboardCheck}>Live Streams</NavItem>
                <Divider py="1em" mb="1.5em" />
                <NavItem
                    icon={AiFillGift}
                    href="https://github.com/elcharitas/autonomov"
                >
                    Changelog
                </NavItem>
                <NavItem icon={BsGearFill}>Settings</NavItem>
            </Flex>
        </Box>
    );
};

export default Sidebar;
