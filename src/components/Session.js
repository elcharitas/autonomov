import React from "react";
import { Avatar, useBoolean } from "@chakra-ui/react";
import Button from "./Button";
import { connectWallet } from "../utils/connect";

export default function Session() {
    return <Avatar ml="4" size="sm" cursor="pointer" />;
}
