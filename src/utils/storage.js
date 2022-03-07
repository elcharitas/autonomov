import * as IPFS from "ipfs-core";

/**
 * Upload files to Web3.Storage
 *
 * @param {*} data
 * @returns
 */
export async function upload(data) {
    const ipfs = IPFS.create();
    return await ipfs.then((ipfs) => ipfs.add(data));
}
