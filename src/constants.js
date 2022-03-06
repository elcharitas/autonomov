/** The Name of our amazinng dApp */
export const appName = "Autonomov Theater";

export const infuraId = "765d4237ce7e4d999f706854d5b66fdc";

export const apiToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEZBMmEyNTUyNWNhNWVFODI0MjUwZEQ4Njc3OTZmQmUyMUY3MDg0MTEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDY1NDQ4MTc5MjcsIm5hbWUiOiJBdXRvbm9tb3YifQ.hpukVjif38TWc2h5srYAXI8NW80DBoDfBJUwVBoQfpM";

export const contract_addr = "0xBc8fCCc8C2c35d3744A3C3c34d4402cEa917b8e0";

export const contract_abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
        ],
        name: "grantAccess",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "tokenUri",
                type: "string",
            },
            {
                internalType: "string",
                name: "trailerURI",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        name: "setCurrentPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "page",
                type: "uint256",
            },
        ],
        name: "getList",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
