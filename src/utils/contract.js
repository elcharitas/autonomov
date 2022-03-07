import { ethers } from "ethers";
import { getProvider } from "./connect";
import { contract_abi, contract_addr } from "../constants";

export async function getContract() {
    const provider = await getProvider();
    const signer = provider.getSigner();
    return new ethers.Contract(contract_addr, contract_abi, signer);
}

export async function mintVideo(uri, trailer, price) {
    const contract = await getContract();
    return await contract.mint(uri, trailer, price);
}

export async function getVideo(id) {
    const contract = await getContract();
    const data = await contract.tokenURI(id);
    return JSON.parse(data || "{}");
}

export async function videoCount() {
    const contract = await getContract();
    return await contract.tokenCount();
}
