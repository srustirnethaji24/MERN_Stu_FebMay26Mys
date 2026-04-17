const chalk = require("chalk");

const MAX_ATTEMPTS = 3;

function validateInput(promptFn, validateFn, callback, attempts = 0) {

    if (attempts >= MAX_ATTEMPTS) {
        console.log(chalk.red("❌ Maximum attempts reached. Exiting..."));
        process.exit(1);
    }

    promptFn((input) => {

        if (validateFn(input)) {
            return callback(null, input);
        } else {
            console.log(chalk.yellow("Invalid input. Try again.\n"));
            validateInput(promptFn, validateFn, callback, attempts + 1);
        }

    });
}


function isValidMenuOption(input, max) {
    const num = Number(input);
    return !isNaN(num) && num >= 1 && num <= max;
}


function isNonEmpty(input) {
    return typeof input === "string" && input.trim().length > 0;
}


function isValidIndex(input, length) {
    const num = Number(input);
    return !isNaN(num) && num >= 1 && num <= length;
}


function isNotSelf(currentUserId, targetUserId) {
    return currentUserId !== targetUserId;
}


function isNotDuplicateRequest(currentUser, targetUserId) {
    return !currentUser.requestsSent.includes(targetUserId);
}


function isNotAlreadyConnected(currentUser, targetUserId) {
    return !currentUser.connections.includes(targetUserId);
}

module.exports = {
    validateInput,
    isValidMenuOption,
    isNonEmpty,
    isValidIndex,
    isNotSelf,
    isNotDuplicateRequest,
    isNotAlreadyConnected
};