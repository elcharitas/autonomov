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

const getProvider = async () => {
    if (!window.instance) window.instance = await web3Modal.connect();
    return new ethers.providers.Web3Provider(window.instance);
};

const connectWallet = async ({ setAccount, setProvider }) => {
    const provider = await getProvider();
    const account = await provider.listAccounts();
    setAccount(account);
    setProvider(provider);
};

export { connectWallet, getProvider };
