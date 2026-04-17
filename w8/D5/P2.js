// Multiple file upload using multer
const express = require("express");
const multer = require("multer");

async function main() {
    try {
        const app = express();

        const upload = multer({
            dest:"uploads/"
        });

        app.post("/upload-multiple",(req,res)=>{
            upload.array("file",5)(req,res,(err)=>{
                if(err){
                    if(err instanceof multer. MulterError){
                    if(error.code === "LIMIT_UNEXPECTED_FILE"){
                        return res.status(400).send("Max 5 files allowed");
                    }
                    return res.status(400).send(err.message);
                }
            }
                res.send({
                    message:"Files uploaded successfully.",
                    count:req.files.length,
                    files:req.files,
                });
            });
        });
        app.listen(3000, () => {
            console.log("Server Started On Port http://localhost:3000");
            console.log("POST /upload-dest");
        });
    } catch (error) {
        confirm.log("Error:",error.message);
    }
}
main();