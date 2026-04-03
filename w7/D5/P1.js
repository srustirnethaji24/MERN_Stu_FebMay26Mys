// How Cookie is used to track session 

//Simulated server-side session server
const sessionStore = {"abc123":{userID:101,username:"Srusti",role:"student"}};
//Simulated browser cookue value
const browserCookieSessionId = "abc123";

const sessionData = sessionStore [browserCookieSessionId];
console.log("Server-side session data:",sessionData);