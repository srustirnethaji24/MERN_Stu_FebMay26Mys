Add:
/*
=========================================================
GET MOVIE BY ID


GET /api/movies/:id
=========================================================
*/


export async function getMovieById(id) {
  const response = await api.get(`/movies/${id}`);


  return response.data;
}
