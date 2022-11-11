import axios from "axios";
const api = axios.create({
  /* Usamos o axios para criar uma referência de
  endereço da API/Servidor ( chamada baseSURL ) */
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
