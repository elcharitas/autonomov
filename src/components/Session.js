import React from "react";
import { Avatar, useBoolean } from "@chakra-ui/react";
import Button from "./Button";
import { connectWallet } from "../utils/connect";

export default function Session() {
    const [isLogged, { on }] = useBoolean(
        localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER")?.length > 0
    );

    return isLogged ? (
        <Button
            ml="4"
            text="Connect Wallet"
            onClick={connectWallet.bind({}, on)}
        />
    ) : (
        <Avatar ml="4" size="sm" cursor="pointer" />
    );
}
