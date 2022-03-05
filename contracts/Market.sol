// SPDX-License-Identifier: MIT
// Contract Superfluously written by LordYur3i(https://github.com/LordYur3i)

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MarketPlace {
    ERC20 private payToken;
    address private admin;

    // listing of items
    struct ItemListing {
        string name;
        address creator;
        address creation;
        uint256 price;
        bool sale;
    }

    mapping(uint256 => ItemListing) private registry;

    constructor(address _payToken) {
        admin = msg.sender;
        payToken = ERC20(_payToken);
    }

    function listColletable(uint256 _id, address _creation, uint256 _price, bool _sale) external {
        require(_price > 0, "Price should be more than zero");
        require(registry[_id].price == 0, "Collectable already exists");
        registry[_id] = ItemListing("", msg.sender, _creation, _price, _sale);
    }

    function setCurrentPrice(uint256 _id, uint256 _price) external {
        require(_price > 0, "Invalid price set");
        require(registry[_id].price != 0, "This collectable does not exists!");
        require(
            msg.sender == registry[_id].creator,
            "Only creator can change price"
        );
        registry[_id].price = _price;
    }

    function unlistCollectable(uint256 _id) external payable {
        require(registry[_id].price != 0, "This collectable does not exists!");
        require(
            msg.sender == registry[_id].creator,
            "Only creator can unlist collectable"
        );
        delete registry[_id];
    }

    /**
     * @dev returns the token url for a collectable
     */
    function getCollectable(uint256 _id) external returns (string memory) {
        require(registry[_id].price != 0, "This collectable does not exists!");
        string memory uri = ERC721(registry[_id].creation).tokenURI(_id);
        if(msg.sender != registry[_id].creator){
            _payCreator(_id);
        }
        return uri;
    }

    /**
     * @dev pays creator and admin certain amounts
     */
    function _payCreator(uint256 _id) internal {
        uint256 creatorPrice = registry[_id].price;
        payToken.transferFrom(msg.sender, admin, creatorPrice * 5/100);
        payToken.transferFrom(msg.sender, registry[_id].creator, creatorPrice * 95/100);
    }
}
