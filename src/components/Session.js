import React, { useState, useEffect } from "react";
import { Avatar } from "@chakra-ui/react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

export default function Session() {
    const providerOptions = {
        binancechainwallet: {
            package: true,
        },
    };

    const web3Modal = new Web3Modal({
        chainId: "80001",
        theme: "dark",
        cacheProvider: false,
        disableInjectedProvider: false,
        providerOptions,
    });

    const [account, setAccount] = useState("");

    //const [provider, setProvider] = useState(null);

    useEffect(() => {
        Promise.resolve(
            (async () => {
                const instance = await web3Modal.connect();
                const provider = new ethers.providers.Web3Provider(instance);
                const account = await provider.listAccounts()[0];
                //setProvider(provider);
                setAccount(account);
            })()
        );
    });

    return <Avatar ml="4" size="sm" name={account} cursor="pointer" />;
}
