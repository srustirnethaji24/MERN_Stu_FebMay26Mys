// Removing the EventEmiiter listeners

const EventEmiiter = require("events");

const jobEmitter = new EventEmiiter();

function showJobProgress(status){
    console.log("Job Status:",status);
}

//Add listner
jobEmitter.on("Progress",showJobProgress);

//Emit the event
jobEmitter.emit("Progress","50% completed");

//Remove listener
jobEmitter.off("Progress",showJobProgress);

//Emit the event
jobEmitter.emit("Progress","100% completed");