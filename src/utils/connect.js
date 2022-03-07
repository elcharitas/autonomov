import Web3Modal from "web3modal";
import { ethers } from "ethers";

const providerOptions = {
    binancechainwallet: {
        package: true,
    },
};

const web3Modal = new Web3Modal({
    chainId: "80001", // polygon mumbai chain Id
    theme: "dark",
    cacheProvider: true,
    disableInjectedProvider: false,
    providerOptions,
});

const getProvider = async () => {
    const instance = await web3Modal.connect();
    return new ethers.providers.Web3Provider(instance);
};

const connectWallet = async (callback) => {
    const provider = await getProvider();
    const account = await provider.listAccounts();
    callback(account);
};

export { connectWallet, getProvider };
