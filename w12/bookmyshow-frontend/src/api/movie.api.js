import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/api" });

export async function getMovies(filters = {}) {
  const response = await api.get("/movies", { params: filters });
  return response.data;
}

export async function getMovieById(id) {
  const response = await api.get(`/movies/${id}`);
  return response.data;
}

export async function createMovie(movieData) {
  const token = localStorage.getItem("token");
  const response = await api.post("/movies", movieData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function updateMovie(movieId, movieData) {
  const token = localStorage.getItem("token");
  const response = await api.put(`/movies/${movieId}`, movieData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function deleteMovie(movieId) {
  const token = localStorage.getItem("token");
  const response = await api.delete(`/movies/${movieId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
