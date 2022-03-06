import { Web3Storage } from "web3.storage";

import { apiToken } from "../constants";

export const client = new Web3Storage({ token: apiToken });

/**
 * Upload files to Web3.Storage
 *
 * @param {*} fname
 * @param {*} file
 * @returns
 */
export async function uploadFiles(fname, file) {
    return new Promise((resolve, reject) => {
        await client.put(file, {
            name: fname,
            maxRetries: 3,
            onRootCidReady: resolve,
        });
    });
}
