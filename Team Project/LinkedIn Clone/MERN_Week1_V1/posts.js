const userModule = require("./user");
const chalk = require("chalk");

let posts = [];

function createPost(rl, callback) {
    const currentUser = userModule.getcurrentUser();

    if (!currentUser) {
        console.log(chalk.yellow("Login first"));
        return callback();
    }

    rl.question("Enter your post content: ", (content) => {

        if (!content.trim()) {
            console.log(chalk.red("Post cannot be empty"));
            return callback();
        }

        const post = {
            id: Date.now(),
            userId: currentUser.id,
            content: content,
            likes: [],
            comments: []
        };

        posts.push(post);

        console.log(chalk.green("Post created successfully"));
        callback();
    });
}

function getAllPosts() {
    return posts;
}

module.exports = {
    createPost,
    getAllPosts
};
