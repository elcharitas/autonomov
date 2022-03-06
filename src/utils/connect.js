import Web3Modal from "web3modal";
import { ethers } from "ethers";

// infuraId needed for wallet options
import { infuraId } from "../constants";

const providerOptions = {
    binancechainwallet: {
        package: true,
    },
    walletconnect: {
        options: {
            infuraId,
        },
    },
    walletlink: {
        options: {
            infuraId,
        },
    },
};

const web3Modal = new Web3Modal({
    chainId: "80001", // polygon mumbai chain Id
    theme: "dark",
    cacheProvider: false,
    disableInjectedProvider: false,
    providerOptions,
});

const getProvider = () => {
    const instance = await web3Modal.connect();
    return new ethers.providers.Web3Provider(instance);
};

const connectWallet = async ({ setAccount, setProvider }) => {
    const account = await provider.listAccounts()[0];
    setProvider(provider);
    setAccount(account);
};

export { connectWallet, getProvider };
