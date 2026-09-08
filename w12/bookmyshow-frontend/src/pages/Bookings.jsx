import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SeatGrid from "../components/SeatGrid";
import { createBooking } from "../api/booking.api";
import { getShowById } from "../api/show.api";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Bookings() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDetails, setShowDetails] = useState(null);

  if (!bookingData) {
    return (
      <section>
        <h1>Book Tickets</h1>
        <p>Please select a movie and show to book tickets.</p>
        <button onClick={() => navigate("/movies")} style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
          Browse Movies
        </button>
      </section>
    );
  }

  const { movie, show } = bookingData;

  useEffect(() => {
    async function fetchShow() {
      try {
        const response = await getShowById(show._id);
        setShowDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchShow();
  }, [show._id]);

  async function handleBooking() {
    try {
      setLoading(true);
      setError("");
      await createBooking({ showId: show._id, selectedSeats });
      alert("Booking created successfully!");
      navigate("/my-bookings");
    } catch (error) {
      setError(error.response?.data?.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  }

  if (!showDetails) return <LoadingSpinner />;

  return (
    <section>
      <h1>Book Tickets</h1>
      <div style={styles.summary}>
        <h2>{movie.title}</h2>
        <p>Genre: {movie.genre}</p>
        <p>Rating: {movie.rating}</p>
        <p>Date: {new Date(show.date).toLocaleDateString()}</p>
        <p>Time: {show.time}</p>
        <p>Available Seats: {showDetails.availableSeats}</p>
      </div>
      {error && <p style={styles.error}>{error}</p>}
      <h2>Select Seats</h2>
      <SeatGrid seats={showDetails.seats} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
      <div style={styles.selection}>
        <h3>Selected Seats</h3>
        {selectedSeats.length === 0 ? <p>No seats selected.</p> : <p>{selectedSeats.join(", ")}</p>}
      </div>
      <button
        onClick={handleBooking}
        disabled={selectedSeats.length === 0 || loading}
        style={{ ...styles.button, ...(selectedSeats.length === 0 || loading ? styles.disabled : {}) }}
      >
        {loading ? "Booking..." : "Confirm Booking"}
      </button>
    </section>
  );
}

const styles = {
  summary: { border: "1px solid #ddd", padding: "20px", borderRadius: "8px", marginBottom: "30px" },
  selection: { marginTop: "30px" },
  button: { marginTop: "30px", padding: "12px 20px", cursor: "pointer" },
  disabled: { cursor: "not-allowed", opacity: 0.5 },
  error: { color: "red", marginBottom: "20px" },
};
