const userModule = require("./user");
const postModule = require("./posts");
const chalk = require("chalk");

function viewFeed(callback) {
    const currentUser = userModule.getcurrentUser();
    const users = userModule.getAllUsers();
    const posts = postModule.getAllPosts();

    if (!currentUser) {
        console.log(chalk.yellow("Login first"));
        return callback();
    }

    if (posts.length === 0) {
        console.log(chalk.blue("No posts available"));
        return callback();
    }

    console.log("\n===== FEED =====");

    posts.forEach((post, index) => {
        const author = users.find(u => u.id === post.userId);

        console.log(`\n${index + 1}. ${author ? author.name : "Unknown"}`);
        console.log(`Post: ${post.content}`);
        console.log(`Likes: ${post.likes.length} | Comments: ${post.comments.length}`);
    });

    console.log("================\n");
    callback();
}

function likeOrComment(rl, callback) {
    const currentUser = userModule.getcurrentUser();
    const users = userModule.getAllUsers();
    const posts = postModule.getAllPosts();

    if (!currentUser) {
        console.log(chalk.yellow("Login first"));
        return callback();
    }

    if (posts.length === 0) {
        console.log(chalk.blue("No posts to interact"));
        return callback();
    }

    console.log("\nSelect Post:");

    posts.forEach((post, index) => {
        const author = users.find(u => u.id === post.userId);
        console.log(`${index + 1}. ${author ? author.name : "Unknown"} - ${post.content}`);
    });

    rl.question("Enter post number: ", (choice) => {
        const post = posts[Number(choice) - 1];

        if (!post) {
            console.log(chalk.red("Invalid choice"));
            return callback();
        }

        rl.question("1.Like  2.Comment : ", (action) => {

            if (action === "1") {
                if (post.likes.includes(currentUser.id)) {
                    console.log(chalk.yellow("Already liked"));
                } else {
                    post.likes.push(currentUser.id);
                    console.log(chalk.green("Post liked"));
                }
                return callback();
            }

            
            if (action === "2") {
                rl.question("Enter comment: ", (text) => {
                    post.comments.push({
                        userId: currentUser.id,
                        text: text
                    });

                    console.log(chalk.green("Comment added"));
                    callback();
                });
            } else {
                console.log(chalk.red("Invalid action"));
                callback();
            }
        });
    });
}

module.exports = {
    viewFeed,
    likeOrComment
};
