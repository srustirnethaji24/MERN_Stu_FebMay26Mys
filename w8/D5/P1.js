// File upload using Multer : with file type, file size restrictions

const express = require("express");
const multer = require("multer");

async function main() {
    try{
        const app = express();

        // mimetype: Format Of File
        const fileFilter = (req,file,callback) => {
            if(file.mimetype === "image/png" || file.mimetype === "image/jpeg"){
                callback(null,true);
            }
            else{
                callback(new Error("Only PNG and JPEG images are allowed"),false);
            }
        };

        // Approach 1: Using Dest:
        const uploadWithDest = multer({
            dest: "uploads/",
            limits: {fileSize: 1024 * 1024 * 2},
            fileFilter
        });

        app.post("/uploaded-dest", uploadWithDest.single("file"), (req,res) => {
            res.send({
                message: "Uploaded Using Dest Approach",
                note: "Filename is random, no extension preserved",
                file:req.file
            });
        });

        // Approach 2: using diskStorage
        const storage = multer.diskStorage({
            // where to store the file?
            destination:(req,res,callback)=>{
                callback(null,"uploads/");
            },
            // How to name the file 
            filename:(req,file,callback)=>{
                callback(null,Date.now()+"-"+file.originalname);
            }
        });
        const uploadWithDisk = multer({
            storage,
            limits: {fileSize: 1024 * 1024 * 2},// 2MB
            fileFilter
        });

        app.post("/uploaded-disk", uploadWithDisk.single("file"), (req,res) => {
            res.send({
                message: "Uploaded Using diskstorage Approach",
                note: "Filename is controlled and extension is preserved",
                file:req.file
            });
        });
        app.listen(3000, () => {
            console.log("Server Started On Port http://localhost:3000");
            console.log("POST /upload-dest");
        });
    }
    catch(error) {
        console.log("Error : ",error.message);
    }
}
main();