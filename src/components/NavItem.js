import React from "react";
import { Flex, Icon, useColorModeValue, useDisclosure } from "@chakra-ui/react";

const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    const integrations = useDisclosure();
    const color = useColorModeValue("gray.600", "gray.300");
    return (
        <Flex
            align="center"
            px="4"
            pl="4"
            py="3"
            cursor="pointer"
            color={useColorModeValue("inherit", "gray.400")}
            _hover={{
                bg: useColorModeValue("gray.100", "gray.900"),
                color: useColorModeValue("gray.900", "gray.200"),
            }}
            role="group"
            fontWeight="semibold"
            transition=".15s ease"
            {...rest}
        >
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
            {children}
        </Flex>
    );
};

export default NavItem;
