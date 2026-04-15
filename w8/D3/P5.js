// Relationship patterns
const mongoose = require("mongoose");
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");
        
        // One-to-many (embedding)
        const blogSchema = new mongoose.Schema({
            title: String,
            comments:[
                {
                    text: String
                }
            ]
        });
        const Blog = mongoose.model("Blog",blogSchema);
        await Blog.deleteMany();

        const blog = await Blog.create({
            title: "Mongoose basics",
            comments:[
                {text: "Great article"},
                {text: "Helpful article"}
            ]
        });

        console.log("embedding:");
        console.log(await Blog.find());

        // One to Many relation (referencing)
        const postSchema = new mongoose.Schema({
            title:String
        });

        const commentSchema = new mongoose.Schema({
            text: String,
            post:{
                type:mongoose.Schema.Types.ObjectId,ref:"Post"
            }
        });

        const Post = mongoose.model("Post",postSchema);
        const Comment = mongoose.model("Comment",commentSchema);

        await Post.deleteMany();
        await Comment.deleteMany();

        const post = await Post.create({title:"NodeJS Basics"});
        await Comment.create([
            {text:"Nice post!",post:post._id},
            {text:"Good",post:post._id}
        ]);
        console.log("Referencing:");
        console.log(await Comment.find().populate("post"));
    }
    catch(error) {
        console.log("Error:",error.message);
    }
     finally {
            await mongoose.disconnect();
            console.log("Disconnected from DB.");
        }
}


main();