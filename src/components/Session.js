import React, { useState, useMemo } from "react";
import { Avatar } from "@chakra-ui/react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { infuraId } from "../constants";

export default function Session({ setAccount, setProvider }) {
    const providerOptions = {
        binancechainwallet: {
            package: true,
        },
        walletconnect: {
            options: {
                infuraId,
            },
        },
    };

    const web3Modal = new Web3Modal({
        chainId: "80001",
        theme: "dark",
        cacheProvider: false,
        disableInjectedProvider: false,
        providerOptions,
    });

    //const [provider, setProvider] = useState(null);

    useMemo(() => {
        Promise.resolve(
            (async () => {
                const instance = await web3Modal.connect();
                const provider = new ethers.providers.Web3Provider(instance);
                const account = await provider.listAccounts()[0];
                setProvider(provider);
                setAccount(account);
            })()
        );
    });

    return <Avatar ml="4" size="sm" cursor="pointer" />;
}
