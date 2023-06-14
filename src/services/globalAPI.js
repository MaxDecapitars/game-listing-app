import axios from 'axios';

const key = '55dae98e313f44f08d014cc021889dfc';
const baseURL = 'https://api.rawg.io/api';

const axiosCreate = axios.create({
  baseURL,
});

const getGenreList = axiosCreate.get(`/genres?key=${key}`);
const getAllGames = axiosCreate.get(`/games?key=${key}`);
const getGameListByGenreId = (id) => axiosCreate.get(`/games?key=${key}&genres=${id}`);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
