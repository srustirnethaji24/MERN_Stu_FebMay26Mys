// JWT Fundametnals : token generation and verification
const jwt = require("jsonwebtoken")

const secretkey = "srusti123";

// playload holds small non-sensitive data
const playload ={userid:101, role:"member"};

// jwt.sign() creates a signed JWT token
const token = jwt.sign(playload,secretkey,{expiresIn:"1h"});

console.log("Token generated successfully\n", token);

const tokenParts = token.split(".");
console.log("Header section:",tokenParts[0]);
console.log("Payload section:",tokenParts[1]);
console.log("Signature section:",tokenParts[2]);
console.log("JWT part count:",tokenParts.length);

try{
    // jwt.verify() checks trust, signature and expiration
    const verifiedPayload = jwt.verify(token,secretkey);
    console.log("Verified Payload:",verifiedPayload);
}
catch(error){
    console.log("Verification failed:",error.message);
}

const decodeWithoutVerification = jwt.decode(token);
console.log("decoded token:",decodeWithoutVerification);