//SPDX-License-Identifier:MIT

pragma solidity 0.8.4;

contract AgreedPrice2 {
    address public owner;
    uint256 public price;

    constructor(uint256 _price) {
        owner = msg.sender;
        price = _price;
    }

    modifier justTheOwner() { 
        require(msg.sender == owner, "Restricted Access");
        _;
    }

    function changeOwner(address _newOwner) external justTheOwner  {
        owner = _newOwner;
    }

    function updatePrice(uint256 _price) external justTheOwner {
        price = _price;
    }
}