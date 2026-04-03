// Session security , regeneraton, expiration and logout
const express = require("express");
const session = require("express-session");

const app = express();

// Session Middleware
app.use(session({
    secret: "MySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000, // 1 hour
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
}));

// LOGIN (Session Regeneration)
app.get("/login", function (req, res, next) {
    req.session.regenerate(function (error) {
        if (error) {
            return next(error);
        }

        req.session.user = {
            id: 201,
            username: "Poorna",
            role: "student"
        };

        res.send("Session regenerated and details stored after login.");
    });
});

// PROFILE (Session Validation)
app.get("/profile", function (req, res) {
    if (!req.session.user) {
        return res.status(401).json({
            success: false,
            message: "No active login session found."
        });
    }

    res.json({
        success: true,
        sessionUser: req.session.user
    });
});

// LOGOUT (Session Destruction)
app.get("/logout", function (req, res, next) {
    req.session.destroy(function (error) {
        if (error) {
            return next(error);
        }

        res.clearCookie("connect.sid");
        res.send("Session destroyed & cookie cleared.");
    });
});

// GLOBAL ERROR HANDLER
app.use(function (error, req, res, next) {
    res.status(500).json({
        success: false,
        message: error.message
    });
});

// SERVER
app.listen(4000, function () {
    console.log("Express-session demo server running @ http://localhost:4000");
});