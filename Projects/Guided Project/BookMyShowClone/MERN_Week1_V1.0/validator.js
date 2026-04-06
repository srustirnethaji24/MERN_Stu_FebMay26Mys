// Callback based validation function 
function validateMovieSelection(movies,movieId,callback) {
    const selectedMovie = movies.find((movie)=>movie.id === movieId);

    if (!selectedMovie) {
        return callback("Invalid movie selection.Choose a valid movie Id.",null);
    }
    callback(null,selectedMovie);
} 

function validateTimeSelection(movie,selectedTime,callback) {
    const selectedShowTime = movie.Showtimes.find((show)=>show.time.toLowerCase()===selectedTime.toLowerCase());

    if (!selectedShowTime) {
        return callback("Invalid time slot selection.Choose a valid time slot.",null);
    }
    callback(null,selectedShowTime);
} 
function validateSeatCount(seatCount,callback) {
    if (!isNaN(seatCount) || (seatCount <= 0)) {
        return callback("Invalid seat count.Enter a valid seat count.",null);
    }
    callback(null,seatCount);
} 

module.exports ={
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount
};