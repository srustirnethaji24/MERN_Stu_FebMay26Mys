// Cancel.js
// To cancel the existing booking if exits 
const bookingEmitter = require("./events");
const { getCurrentBooking, clearCurrentsBooking } = require("./booking");


function cancelBooking(movies) {
    const booking = getCurrentBooking();

    if (!booking) {
        bookingEmitter.emit("bookingFailed", "No booking found to cancel.");
        return null;
    }
    const Movie = movies.find((m) => m.id === booking.movieID);
    if (!movie) {
        bookingEmitter.emit("bookingFailed", "Movie data not found while cancelling booking.");
        return null;
    }

    const ShowTime = movie.Showtimes.find((show) => show.time.toLowerCase() === booking.time.toLowerCase());
    if (!ShowTime) {
        bookingEmitter.emit("bookingFailed","Showtime data not found");
        return null;
    }
    // restore seats
    showTime.seatsAvailable += booking.seatCount;

    //clear current Booking
    clearCurrentsBooking();

    bookingEmitter.emit("bookingCancelled",booking);

    return booking;
}
module.exports = {
    cancelBooking
};