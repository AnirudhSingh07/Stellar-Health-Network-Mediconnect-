// test/AuthContract.test.js

const AuthContract = artifacts.require("AuthContract");

contract("AuthContract", accounts => {
    let authContractInstance;

    before(async () => {
        authContractInstance = await AuthContract.deployed();
    });

    it("should register a user", async () => {
        const username = "testuser";
        const email = "test@example.com";
        const password = "password123";

        await authContractInstance.registerUser(username, email, password);

        const user = await authContractInstance.users(1);
        assert.equal(user.username, username, "Username not set correctly");
        assert.equal(user.email, email, "Email not set correctly");
        assert.isNotEmpty(user.hashedPassword, "Password not hashed correctly");
    });

    it("should login a user with correct credentials", async () => {
        const userId = 1;
        const password = "password123";

        const [username, email, isPasswordCorrect] = await authContractInstance.loginUser(userId, password);
        assert.isTrue(isPasswordCorrect, "Password not correct");
    });

    it("should not login a user with incorrect credentials", async () => {
        const userId = 1;
        const incorrectPassword = "incorrectpassword";

        const [username, email, isPasswordCorrect] = await authContractInstance.loginUser(userId, incorrectPassword);
        assert.isFalse(isPasswordCorrect, "Password should not be correct");
    });
});
