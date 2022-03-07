import React from "react";
import { Link as RLink } from "react-router-dom";
import {
    Flex,
    Icon,
    IconButton,
    Input,
    Link,
    InputGroup,
    InputLeftElement,
    useBreakpointValue,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
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
            h="16"
        >
            <IconButton
                aria-label="Menu"
                display={{ base: "inline-flex" }}
                onClick={useBreakpointValue({
                    base: sidebar.onOpen,
                    md: sidebar.toggle,
                })}
                icon={<BiMenuAltLeft size={20} />}
                color="white"
                _hover={{ color: "whiteAlpha.600" }}
                bgColor="transparent"
                size="md"
            />
            <InputGroup
                w="100"
                display={{ base: "none", md: "flex" }}
                borderColor={useColorModeValue("whiteAlpha.400", "gray.700")}
            >
                <InputLeftElement color="gray.500">
                    <FiSearch />
                </InputLeftElement>
                <Input
                    placeholder="Search for videos, users, streams..."
                    color={useColorModeValue("white", "blackAlpha.900")}
                />
            </InputGroup>

            <Flex justify={"flex-end"} align="center">
                <Link color="gray.500" as={RLink} to="/create" cursor="pointer">
                    <BiVideoPlus size={20} />
                </Link>
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
