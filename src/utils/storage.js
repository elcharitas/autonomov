import * as IPFS from "ipfs-core";

const ipfs = IPFS.create();

/**
 * Upload files to Web3.Storage
 *
 * @param {*} data
 * @returns
 */
export async function upload(data) {
    return await ipfs.then((ipfs) => ipfs.add("Hello world"));
}
