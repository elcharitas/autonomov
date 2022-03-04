import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Icon, useColorModeValue } from "@chakra-ui/react";

const NavItem = ({ icon, href, children, ...rest }) => {
    const color = useColorModeValue("gray.600", "gray.300");
    return (
        <Flex
            align="center"
            px="4"
            pl="4"
            py="3"
            cursor="pointer"
            color={useColorModeValue("white", "gray.400")}
            _hover={{
                bg: useColorModeValue("gray.100", "gray.900"),
                color: useColorModeValue("gray.900", "gray.200"),
            }}
            role="group"
            fontWeight="semibold"
            transition=".15s ease"
            {...rest}>
            {icon && (
                <Icon
                    mx="2"
                    boxSize="4"
                    _groupHover={{
                        color: color,
                    }}
                    as={icon}
                />
            )}
            <Box as={href ? Link : "div"} to={href}>
                {children}
            </Box>
        </Flex>
    );
};

export default NavItem;
