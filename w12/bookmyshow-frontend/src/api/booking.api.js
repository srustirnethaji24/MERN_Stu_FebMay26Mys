import api from "./axios";

export async function createBooking(payload) {
  const response = await api.post("/bookings", payload);
  return response.data;
}

export async function getMyBookings() {
  const response = await api.get("/bookings/my");
  return response.data;
}

export async function cancelBooking(bookingId) {
  const response = await api.patch(`/bookings/${bookingId}/cancel`);
  return response.data;
}
