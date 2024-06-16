const PaymentProcessor = artifacts.require("PaymentProcessor");

contract("PaymentProcessor", accounts => {
  it("should send payment", async () => {
    const paymentProcessorInstance = await PaymentProcessor.deployed();
    const recipient = accounts[1];
    const amount = web3.utils.toWei('1', 'ether');
    
    // Send payment
    await paymentProcessorInstance.sendPayment(recipient, amount, { from: accounts[0], value: amount });

    // Check balance of recipient after payment
    const recipientBalance = await web3.eth.getBalance(recipient);
    assert.equal(recipientBalance, amount, "Payment not sent");
  });

  it("should withdraw balance", async () => {
    const paymentProcessorInstance = await PaymentProcessor.deployed();
    const contractBalanceBefore = await web3.eth.getBalance(paymentProcessorInstance.address);
    const owner = accounts[0];  
    await paymentProcessorInstance.withdraw({ from: owner });

    // Check balance of contract after withdrawal
    const contractBalanceAfter = await web3.eth.getBalance(paymentProcessorInstance.address);
    assert.equal(contractBalanceAfter, 0, "Balance not withdrawn");
  });
});
