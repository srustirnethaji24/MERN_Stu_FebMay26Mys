import api from "./axios";

export async function getShows(filters = {}) {
  const response = await api.get("/shows", { params: filters });
  return response.data;
}

export async function getShowById(showId) {
  const response = await api.get(`/shows/${showId}`);
  return response.data;
}

export async function createShow(showData) {
  const token = localStorage.getItem("token");
  const response = await api.post("/shows", showData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function updateShow(showId, showData) {
  const token = localStorage.getItem("token");
  const response = await api.put(`/shows/${showId}`, showData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function deleteShow(showId) {
  const token = localStorage.getItem("token");
  const response = await api.delete(`/shows/${showId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
