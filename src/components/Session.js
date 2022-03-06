import React, { useMemo, useEffect } from "react";
import { Avatar, useConst } from "@chakra-ui/react";
import Button from "./Button";
import { connectWallet, getProvider } from "../utils/connect";

export default function Session({
    account: [account, setAccount],
    provider: [, setProvider],
}) {
    const isGuest = useMemo(() => account.length == 0);

    useEffect(() => {
        getProvider().then((provider) => {
            setProvider(provider);
            provider.listAccounts().then((str) => {
                setAccount(str[0]);
            });
        });
    });

    return isGuest ? (
        <Button
            ml="4"
            text="Connect Wallet"
            onClick={connectWallet.bind({}, { setAccount, setProvider })}
        />
    ) : (
        <Avatar ml="4" size="sm" cursor="pointer" />
    );
}
