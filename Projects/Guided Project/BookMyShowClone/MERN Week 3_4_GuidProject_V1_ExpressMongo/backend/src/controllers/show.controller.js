const showService = require("../services/show.service");

// Create Show:Admin
exports.createShow = async (req,res,next) => {
    try{
        const show = await showService.createShow(req.body);
        res.status(201).json({
            success:true,
            message:"Show Created Successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

// Get Shows
exports.getShows = async (req,res,next) => {
    try{
        const shows = await showService.getShows(req.query);
        res.status(200).json({
            success:true,
            message:"Shows Fetched Successfully",
            data:shows,
        });
    }
    catch(error){
        next(error);
    }
};

// Get Single Show
exports.getShowById = async (req,res,next) => {
    try{
        const show = await showService.getShows(req.params.id);
        res.status(200).json({
            success:true,
            message:"Show Fetched Successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

// Update Show - admin
exports.updateShow = async (req,res,next) => {
    try{
        const show = await showService.updateShow(req.params.id,req.body);
        res.status(200).json({
            success:true,
            message:"Show Updated Successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

// Delete Show - admin
exports.deleteShow = async (req,res,next) => {
    try{
        await showService.deleteShow(req.params.id);
        res.status(200).json({
            success:true,
            message:"Show Deleted Successfully",
        });
    }
    catch(error){
        next(error);
    }
};