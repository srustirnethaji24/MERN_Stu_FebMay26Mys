const userModule = require("./user");
const chalk = require("chalk");

function sendConnectionRequest(rl, callback) {
    const currentUser = userModule.getcurrentUser();
    const users = userModule.getAllUsers();

    if (!currentUser) {
        console.log("Login first");
        return callback();
    }

    const otherUsers = users.filter(u => u.id !== currentUser.id);

    if (otherUsers.length === 0) {
        console.log(chalk.red("No users available"));
        return callback();
    }

    console.log("\nSelect user:");
    otherUsers.forEach((u, i) => {
        console.log(`${i + 1}. ${u.name}`);
    });

    rl.question("Enter choice: ", (choice) => {
        const selectedUser = otherUsers[Number(choice) - 1];

        if (!selectedUser) {
            console.log(chalk.red("Invalid choice"));
            return callback();
        }

        if (currentUser.connections.includes(selectedUser.id)) {
            console.log(chalk.yellow("Already connected"));
            return callback();
        }

        if (currentUser.requestsSent.includes(selectedUser.id)) {
            console.log(chalk.blue("Request already sent"));
            return callback();
        }

        currentUser.requestsSent.push(selectedUser.id);
        selectedUser.requestsReceived.push(currentUser.id);

        console.log(chalk.green("Request sent successfully"));
        callback();
    });
}

function viewRequests(callback) {
    const currentUser = userModule.getcurrentUser();
    const users = userModule.getAllUsers();

    if (!currentUser) {
        console.log(chalk.yellow("Login first"));
        return callback();
    }

    if (currentUser.requestsReceived.length === 0) {
        console.log(chalk.blue("No pending requests"));
        return callback();
    }

    console.log("\nPending Requests:");
    currentUser.requestsReceived.forEach((id, i) => {
        const sender = users.find(u => u.id === id);
        console.log(`${i + 1}. ${sender.name}`);
    });

    callback();
}

function handleRequests(rl, callback) {
    const currentUser = userModule.getcurrentUser();
    const users = userModule.getAllUsers();

    if (!currentUser) {
        console.log(chalk.yellow("Login first"));
        return callback();
    }

    if (currentUser.requestsReceived.length === 0) {
        console.log(chalk.blue("No requests"));
        return callback();
    }

    console.log("\nRequests:");
    currentUser.requestsReceived.forEach((id, i) => {
        const sender = users.find(u => u.id === id);
        console.log(`${i + 1}. ${sender.name}`);
    });

    rl.question("Select request: ", (choice) => {
        const senderId = currentUser.requestsReceived[Number(choice) - 1];
        const sender = users.find(u => u.id === senderId);

        if (!sender) {
            console.log(chalk.red("Invalid choice"));
            return callback();
        }

        rl.question("1.Accept  2.Reject : ", (action) => {

            if (action === "1") {
                currentUser.connections.push(sender.id);
                sender.connections.push(currentUser.id);
                console.log(chalk.green("Connection accepted"));
            } else {
                console.log(chalk.red("Request rejected"));
            }

            
            currentUser.requestsReceived =
                currentUser.requestsReceived.filter(id => id !== sender.id);

            sender.requestsSent =
                sender.requestsSent.filter(id => id !== currentUser.id);

            callback();
        });
    });
}

function viewConnections(callback) {
    const currentUser = userModule.getcurrentUser();
    const users = userModule.getAllUsers();

    if (!currentUser) {
        console.log(chalk.yellow("Login first"));
        return callback();
    }

    if (currentUser.connections.length === 0) {
        console.log(chalk.blue("No connections yet"));
        return callback();
    }

    console.log("\nYour Connections:");
    currentUser.connections.forEach((id, i) => {
        const connectionUser = users.find(u => u.id === id);
        console.log(`${i + 1}. ${connectionUser.name}`);
    });

    callback();
}

module.exports = {
    sendConnectionRequest,
    viewRequests,
    handleRequests,
    viewConnections   
};
