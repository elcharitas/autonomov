import { ethers } from "ethers";
import { uploadFiles } from "./storage";
import { getProvider } from "./connect";
import { contract_abi, contract_addr } from "../constants";

export async function execute(func, args) {
    const signer = await getProvider().getSigner();
    const Contract = new ethers.Contract(contract_addr, contract_abi, signer);
    return await Contract[func](...args);
}

export function mintVideo(file, title) {}
