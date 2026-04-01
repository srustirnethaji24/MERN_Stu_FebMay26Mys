// Generating token to using login function and verifying the token
const jwt = require("jsonwebtoken")

const secretkey = "srusti123";
const wrongSecretkey = "monkey132";

function loginUser(email, password) {
    if (email == "correct@email.com" && password == "sr123") {
        const token = jwt.sign({ userId: 101, email: email, role: "student" }, secretkey, { expiresIn: "1h" });
        return { success: true, token: token };
    }
    return { success: false, message: "Invalid Credentials" };
}
const loginResult = loginUser("correct@email.com", "sr123");
console.log("login result", loginResult);

if (loginResult.success) {
    try {
        const verifiedPayload = jwt.verify(loginResult.token, wrongSecretkey);
        console.log("Verified Payload:", verifiedPayload);
    }
    catch (error) {
        console.log("Verification failed:", error.message);
    }
}