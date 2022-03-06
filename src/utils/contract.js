import { ethers } from "ethers";
import { getProvider } from "./connect";
import { contract_abi, contract_addr } from "../constants";

export async function getContract() {
    const provider = await getProvider();
    await provider.send("eth_requestAccounts", []);
    return new ethers.Contract(contract_addr, contract_abi, provider);
}

export async function mintVideo(uri, trailer, price) {
    const contract = await getContract();
    console.log(await contract.deployed());
    console.log(await contract.tokenURI(1));
}
