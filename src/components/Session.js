import React, { useState, useEffect } from "react";
import { Avatar, useConst } from "@chakra-ui/react";
import Button from "./Button";
import { connectWallet } from "../utils/connect";

export default function Session({
    account: [account, setAccount],
    provider: [, setProvider],
}) {
    const isGuest = useConst(() => !account);
    return isGuest ? (
        <Button
            text="Connect Wallet"
            onClick={connectWallet.bind({}, setAccount, setProvider)}
        />
    ) : (
        <Avatar ml="4" size="sm" cursor="pointer" />
    );
}
