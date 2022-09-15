//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Proxiable.sol";

contract ImplementationA is Proxiable {
    address public owner;
    uint public count;

    function constructor1() public {
        require(owner == address(0), "Already initalized");
        owner = msg.sender;
    }

    function increment() public {
        //require(msg.sender == owner, "Only the owner can increment"); //someone forget to uncomment this
        count++;
    }

    function updateCode(address newCode) onlyOwner public {
        updateCodeAddress(newCode);
    }

    function encode() external pure returns (bytes memory) {
        return abi.encodeWithSignature("constructor1()");
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner is allowed to perform this action");
        _;
    }
}