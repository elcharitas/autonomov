import { ethers, upgrades } from "hardhat";

async function deploy(contract, args) {
    const Contract = await ethers.getContractFactory(contract);
    const { address } = await Contract.deploy(...args);

    return address;
}

async function deployProxy(contract, args) {
    const Contract = await ethers.getContractFactory(contract);
    const proxy = await upgrades.deployProxy(Contract, args);
    await proxy.deployed();

    return proxy.address;
}

export { deploy, deployProxy };
