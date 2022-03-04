import React from "react";
import {
    Box,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
    useBoolean,
} from "@chakra-ui/react";

import Base from "./Base";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Page({ children, title = "" }) {
    const sidebar = useDisclosure();
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
                placement="left">
                <DrawerOverlay />
                <DrawerContent>
                    <Sidebar w="full" borderRight="none" />
                </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                <Header sidebar={sidebar} />
                <Box as="main">{children}</Box>
            </Box>
        </Base>
    );
}
