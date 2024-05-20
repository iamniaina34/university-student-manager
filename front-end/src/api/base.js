import axios from 'axios';

// Change to the host adress if you want to share access with your phone
const BASE_URL = 'http://127.0.0.1:8085';
const INDEX_PATH = "/index";
const ADD_PATH = "/create";
const UPDATE_PATH = "/update";
const DELETE_PATH = "/delete";

const createAPIRequest = (URL) => {
  return {
    index: async () => {
      try {
        const response = await axios.get(BASE_URL + URL + INDEX_PATH);
        return response;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw error;
      }
    },
    get: async (ID = '') => {
      try {
        const response = await axios.get(BASE_URL + URL + "/" + ID);
        return response;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw error;
      }
    },
    post: async (data) => {
      try {
        const response = await axios.post(BASE_URL + URL + ADD_PATH, data);
        return response;
      } catch (error) {
        console.error('Erreur lors de l\'ajout de données:', error);
        throw error;
      }
    },
    put: async (id, data) => {
      try {
        const response = await axios.put(`${BASE_URL + URL + UPDATE_PATH}/${id}`, data);
        return response;
      } catch (error) {
        console.error('Erreur lors de la mise à jour des données:', error);
        throw error;
      }
    },
    delete: async (id) => {
      try {
        const response = await axios.delete(`${BASE_URL + URL + DELETE_PATH}/${id}`);
        return response;
      } catch (error) {
        console.error('Erreur lors de la suppression des données:', error);
        throw error;
      }
    }
  };
};

export default createAPIRequest;
