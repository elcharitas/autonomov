import { ethers } from "ethers";
import { getProvider } from "./connect";
import { contract_abi, contract_addr } from "../constants";

export async function getContract() {
    const provider = await getProvider();
    return new ethers.Contract(contract_addr, contract_abi, provider);
}

export async function mintVideo(uri, trailer, price) {
    const contract = await getContract();
    return await contract.mint(uri, trailer, price);
}
