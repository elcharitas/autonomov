import React from "react";
import {
    Box,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
} from "@chakra-ui/react";

import Base from "./Base";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Page({ children, title = "" }) {
    const sidebar = useDisclosure();
    return (
        <Base title={title}>
            <Sidebar display={{ base: "none", md: "unset" }} />
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
            <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                <Header />
                <Box as="main" p="4">
                    {children}
                </Box>
            </Box>
        </Base>
    );
}
