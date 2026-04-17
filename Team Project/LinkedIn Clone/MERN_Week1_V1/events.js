const EventEmitter = require("events");
const chalk = require("chalk");

class AppEvents extends EventEmitter {}

const events = new AppEvents();


events.on("sessionStarted", (user) => {
    console.log(chalk.cyan(`\nSession started for ${user.name}`));
});


events.on("profileCreated", (user) => {
    console.log(chalk.green(`Profile created: ${user.name}`));
});

events.on("profileUpdated", (user) => {
    console.log(chalk.blue(`Profile updated: ${user.name}`));
});


events.on("connectionRequested", ({ sender, receiver }) => {
    console.log(
        chalk.yellow(`${sender.name} sent a request to ${receiver.name}`)
    );
});

events.on("connectionAccepted", ({ sender, receiver }) => {
    console.log(
        chalk.green(`${receiver.name} connected with ${sender.name}`)
    );
});

events.on("connectionRejected", ({ sender, receiver }) => {
    console.log(
        chalk.red(`${receiver.name} rejected ${sender.name}'s request`)
    );
});


events.on("postCreated", (post) => {
    console.log(
        chalk.green(`Post created successfully (Post ID: ${post.id})`)
    );
});

events.on("postLiked", ({ user, post }) => {
    console.log(
        chalk.blue(`${user.name} liked a post (ID: ${post.id})`)
    );
});

events.on("commentAdded", ({ user, post }) => {
    console.log(
        chalk.cyan(`${user.name} commented on post (ID: ${post.id})`)
    );
});


events.on("feedViewed", (user) => {
    console.log(
        chalk.magenta(`${user.name} is viewing their feed`)
    );
});


events.on("operationFailed", (message) => {
    console.log(chalk.red(`${message}`));
});

module.exports = events;