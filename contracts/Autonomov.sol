// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Autonomov is ERC721 {
    uint256 maxFee;
    ERC20 private payToken;
    address private autonomov;

    struct TokenData {
        uint256 price;
        string uri;
        string trail;
        mapping(address => bool) access;
    }

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
        uint256 _tokenId,
        string memory tokenUri,
        string memory trailerURI,
        uint256 price
    ) external {
        require(!_exists(_tokenId), "Token exists already");
        require(price > 0, "Fee is less than allowed value");
        require(price < maxFee, "Fee is more than allowed value");
        tokenData[_tokenId].price = price;
        tokenData[_tokenId].uri = tokenUri;
        tokenData[_tokenId].trail = trailerURI;
        tokenData[_tokenId].access[msg.sender] = true;
        _mint(msg.sender, _tokenId);
    }

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
        require(_exists(_tokenId), "Video is yet to be created");

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
     * @dev pay creators the view fee
     */
    function _payCreator(uint256 _tokenId) private {
        address owner = ownerOf(_tokenId);
        require(msg.sender != owner, "You cant pay yourself");
        require(_exists(_tokenId), "Video is yet to be created");
        uint256 amount = tokenData[_tokenId].price;

        (bool paid, ) = payable(owner).call{value: amount}("");
        require(paid, "You need to pay owner to view video");
    }
}
