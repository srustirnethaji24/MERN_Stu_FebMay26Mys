// Reading & Writing files Aysnchronously with fs/promises

const fs = require("fs/promises");
const path =require("path") ;

async function runPromiseBasedFileFlow() {
    const filepath = path.join(__dirname,"promises-note.txt");

    try{
        await fs.writeFile(filepath,
            "written using fs/promises. This work with asnc/await"
        );
        console.log("file written using fs/promises");

        const content = await fs.readFile(filepath,"utf-8");
        console.log(content);
    }
    catch(error){
        console.log("Promise-based fs error: ",error.message);
    }
}
runPromiseBasedFileFlow();