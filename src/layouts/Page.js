import React, { useState } from "react";
import {
    Box,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
    useColorModeValue,
    useBoolean,
} from "@chakra-ui/react";

import Base from "./Base";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Page({ children, title = "" }) {
    const sidebar = useDisclosure();
    const color = useColorModeValue("gray.50", "gray.700");
    const [visible, { toggle }] = useBoolean(true);
    sidebar.toggle = toggle;
    return (
        <Base title={title}>
            <Sidebar
                display={{ base: "none", md: visible ? "unset" : "none" }}
            />
            <Drawer
                isOpen={sidebar.isOpen}
                onClose={sidebar.onClose}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Sidebar w="full" borderRight="none" />
                </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: visible ? 60 : 0 }} transition=".3s ease">
                <Header sidebar={sidebar} />
                <Box as="main">
                    {children}
                    <Footer color={color} />
                </Box>
            </Box>
        </Base>
    );
}
