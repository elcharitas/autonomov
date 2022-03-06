// SPDX-License-Identifier: MIT
// Contract Superfluously written by LordYur3i(https://github.com/LordYur3i)
// Modified by elcharitas(https://github.com/elcharitas)

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Autonomov.sol";

contract MarketPlace {
    address private admin;

    // listing of items
    struct ItemListing {
        address creator;
        address creation;
        bool list;
    }

    mapping(uint256 => ItemListing) private registry;

    constructor() {
        admin = msg.sender;
    }

    function list(uint256 _id, address _creation) external {
        require(registry[_id].list == false, "Collectable is not listed");
        registry[_id].creator = msg.sender;
        registry[_id].creation = _creation;
        registry[_id].list = true;
    }

    function unlist(uint256 _id) external payable {
        require(registry[_id].list == false, "Collectable is not listed");
        require(
            msg.sender == registry[_id].creator,
            "Only creator can unlist collectable"
        );
        delete registry[_id];
    }

    /**
     * @dev returns the token url for a collectable
     */
    function getList(uint256 page) external view returns (string[] memory) {
        string[] memory result;
        uint256 perpage = 15;

        for (uint256 i = (perpage / page); i < (perpage * page); i++) {
            Autonomov video = Autonomov(registry[i].creation);
            result[i] = video.tokenURI(i);
        }

        return result;
    }
}
