//SPDX-License-Identifier:MIT
//This is the Community vetted way of restricting access in a smart contract

pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

contract AgreedPrices is Ownable{
    uint256 public price;

    constructor(uint256 _price) {
        price = _price;
    }


    function updatePrice(uint256 _price) external onlyOwner {
        price = _price;
    }
}