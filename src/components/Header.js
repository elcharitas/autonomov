import React from "react";
import {
    Flex,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";
import { BiMenuAltLeft, BiVideoPlus } from "react-icons/bi";

import Session from "./Session";

export default function Header({ sidebar }) {
    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg={useColorModeValue("blackAlpha.900", "gray.800")}
            borderBottomWidth="1px"
            borderColor={useColorModeValue("blackAlpha.900", "gray.700")}
            h="16">
            <IconButton
                aria-label="Menu"
                display={{ base: "inline-flex", md: "none" }}
                onClick={sidebar.onOpen}
                icon={<BiMenuAltLeft size={20} />}
                size="md"
            />
            <Flex justify={"end"}>
                <InputGroup
                    w="96"
                    display={{ base: "none", md: "flex" }}
                    alignSelf="self-end"
                    borderColor={useColorModeValue(
                        "blackAlpha.400",
                        "gray.700"
                    )}
                    color={"whiteAlpha"}>
                    <InputLeftElement color="gray.500">
                        <FiSearch />
                    </InputLeftElement>
                    <Input placeholder="Search for videos, users, streams..." />
                </InputGroup>
            </Flex>

            <Flex justify={"flex-end"} align="center">
                <Icon
                    color="gray.500"
                    as={BiVideoPlus}
                    size={28}
                    cursor="pointer"
                />
                <Icon
                    ml="4"
                    color="gray.500"
                    as={FaBell}
                    size={28}
                    cursor="pointer"
                />
                <Session />
            </Flex>
        </Flex>
    );
}
