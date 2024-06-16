const MeidicalHistory = artifacts.require("AuthContract");
module.exports = async function(deployer) {
    await deployer.deploy(MeidicalHistory);
}