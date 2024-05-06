import axios from 'axios';

const BASE_URL = 'http://localhost:8085';
const INDEX_PATH = "/index";
const ADD_PATH = "/create";
const UPDATE_PATH = "/update";
const DELETE_PATH = "/delete";

const createAPIRequest = (URL) => {
  return {
    get: async () => {
      try {
        const response = await axios.get(BASE_URL + URL + INDEX_PATH);
        return response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw error;
      }
    },
    post: async (data) => {
      try {
        const response = await axios.post(BASE_URL + URL + ADD_PATH, data );
        return response.data;
      } catch (error) {
        console.error('Erreur lors de l\'ajout de données:', error);
        throw error;
      }
    },
    put: async (id, data) => {
      try {
        const response = await axios.put(`${BASE_URL + URL + UPDATE_PATH}/${id}`, data);
        return response.data;
      } catch (error) {
        console.error('Erreur lors de la mise à jour des données:', error);
        throw error;
      }
    },
    delete: async (id) => {
      try {
        const response = await axios.delete(`${BASE_URL + URL + DELETE_PATH}/${id}`);
        return response.data;
      } catch (error) {
        console.error('Erreur lors de la suppression des données:', error);
        throw error;
      }
    }
  };
};

export default createAPIRequest;
