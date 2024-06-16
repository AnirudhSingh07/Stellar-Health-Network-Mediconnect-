pragma solidity ^0.8.0;

contract PaymentProcessor {
    event PaymentSent(address indexed _from, address indexed _to, uint256 _amount);

    function sendPayment(address payable _to, uint256 _amount) public payable {
        require(_amount <= msg.value, "Insufficient funds sent");
        _to.transfer(_amount);
        emit PaymentSent(msg.sender, _to, _amount);
    }

    receive() external payable {}

    function withdraw() public {
        require(msg.sender == owner(), "Only the owner can withdraw");
        payable(owner()).transfer(address(this).balance);
    }

    modifier onlyOwner() {
        require(msg.sender == owner(), "Caller is not the owner");
        _;
    }

    function owner() public view returns (address) {
        return msg.sender;
    }
}
