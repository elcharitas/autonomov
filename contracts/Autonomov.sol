// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Autonomov is ERC721 {
    // max fee that can be paid for video
    uint256 private maxFee;
    // token to use for paying
    ERC20 private payToken;
    address private autonomov;

    uint256 tokenId = 0;

    struct TokenData {
        uint256 price;
        string uri;
        string trail;
        mapping(address => bool) access;
    }

    // token datas by id
    mapping(uint256 => TokenData) private tokenData;

    constructor(uint256 _maxFee, address _payToken)
        ERC721("Autonomov", "AUTM")
    {
        autonomov = msg.sender;
        maxFee = _maxFee;
        payToken = ERC20(_payToken);
    }

    /**
     * @dev mint  a new collectable
     */
    function mint(
        string memory tokenUri,
        string memory trailerURI,
        uint256 price
    ) external {
        require(price > 0, "Fee is less than allowed value");
        require(price < maxFee, "Fee is more than allowed value");
        // increase the tokenId if in use
        if (_exists(tokenId)) tokenId++;
        tokenData[tokenId].price = price;
        tokenData[tokenId].uri = tokenUri;
        tokenData[tokenId].trail = trailerURI;
        tokenData[tokenId].access[msg.sender] = true;
        // mint new token to sender
        _mint(msg.sender, tokenId);
    }

    /**
     * @dev change current price.  Can only be called by owner
     */
    function setCurrentPrice(uint256 _tokenId, uint256 price) public {
        require(_exists(_tokenId), "Video is yet to be created");
        require(price > 0, "Fee is less than allowed value");
        require(price < maxFee, "Fee is more than allowed value");
        require(
            msg.sender == ownerOf(_tokenId),
            "Only creator can change price"
        );
        tokenData[_tokenId].price = price;
    }

    /**
     * @dev returns the token uri
     */
    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        if (tokenData[_tokenId].access[msg.sender] == true) {
            return tokenData[_tokenId].uri;
        } else {
            return tokenData[_tokenId].trail;
        }
    }

    /**
     * @dev Grants access to sender to view video
     */
    function grantAccess(uint256 _tokenId) public payable {
        // pay before getting URI
        if (msg.sender != ownerOf(_tokenId)) {
            _payCreator(_tokenId);
            tokenData[_tokenId].access[msg.sender] = true;
        }
    }

    /**
     * @dev returns the token url for a collectable
     */
    function getList(uint256 page) external view returns (string[] memory) {
        require(page > 0, "Page number should be more than zero");
        string[] memory result;
        uint256 perpage = 15;

        for (uint256 i = 1; i < (perpage * page); i++) {
            result[i] = tokenURI(i);
        }

        return result;
    }

    /**
     * @dev pay creators the view fee
     */
    function _payCreator(uint256 _tokenId) private {
        address owner = ownerOf(_tokenId);
        require(msg.sender != owner, "You can't pay yourself");
        require(_exists(_tokenId), "Video is yet to be created");
        uint256 amount = tokenData[_tokenId].price;

        payToken.transferFrom(msg.sender, autonomov, (amount * 7) / 100);
        payToken.transferFrom(msg.sender, owner, (amount * 93) / 100);
    }
}
