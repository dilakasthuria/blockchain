pragma solidity ^0.8.0;

contract SupplyChain {
    struct Product {
        uint id;
        string name;
        string manufacturer;
        address owner;
        uint timestamp;
    }

    mapping(uint => Product) public products;
    uint public productCount;

    event ProductAdded(uint id, string name, string manufacturer, address owner, uint timestamp);

    function addProduct(string memory _name, string memory _manufacturer) public {
        productCount++;
        products[productCount] = Product(productCount, _name, _manufacturer, msg.sender, block.timestamp);
        emit ProductAdded(productCount, _name, _manufacturer, msg.sender, block.timestamp);
    }

    function transferOwnership(uint _productId, address _newOwner) public {
        require(products[_productId].owner == msg.sender, "Only the owner can transfer ownership");
        products[_productId].owner = _newOwner;
    }
}
