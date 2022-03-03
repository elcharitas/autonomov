import React from "react";
import {
    Avatar,
    Flex,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";

export default function Header() {
    const sidebar = useDisclosure();
    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg={useColorModeValue("white", "gray.800")}
            borderBottomWidth="1px"
            borderColor={useColorModeValue("inherit", "gray.700")}
            h="14"
        >
            <IconButton
                aria-label="Menu"
                display={{ base: "inline-flex", md: "none" }}
                onClick={sidebar.onOpen}
                icon={<FiMenu />}
                size="sm"
            />
            <Flex justify={"end"}>
                <InputGroup w="96" display={{ base: "none", md: "flex" }}>
                    <InputLeftElement color="gray.500">
                        <FiSearch />
                    </InputLeftElement>
                    <Input placeholder="Search for videos, users, streams..." />
                </InputGroup>
            </Flex>

            <Flex justify={"flex-end"} align="center">
                <Icon color="gray.500" as={FaBell} cursor="pointer" />
                <Avatar
                    ml="4"
                    size="sm"
                    name="anubra266"
                    src="https://avatars.githubusercontent.com/u/30869823?v=4"
                    cursor="pointer"
                />
            </Flex>
        </Flex>
    );
}
