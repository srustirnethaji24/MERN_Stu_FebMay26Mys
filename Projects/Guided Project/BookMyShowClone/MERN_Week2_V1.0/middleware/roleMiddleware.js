// Checks the permission for the req and allows it or rejects it
const CustomError = require("../utils/customError");

function roleMiddleware(...allowedRole) {
    return (req, res, next) => {
        if (!req, res) {
            return next(new CustomError("User info not found.", 401));
        }
        if (!allowedRole.includes(req.user.role)) {
            return next(new CustomError("Forbidden: You do not have access to this resource.", 401));
        }
        next();
    };
}
module.exports = roleMiddleware;