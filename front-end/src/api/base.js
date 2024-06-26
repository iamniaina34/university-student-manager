import axios from 'axios';

// Change to the host adress if you want to share access with your phone
const BASE_URL = 'http://192.168.182.49:8085';
const INDEX_PATH = "/index";
const ADD_PATH = "/create";
const ADD_ALL_PATH = "/createAll";
const UPDATE_PATH = "/update";
const DELETE_PATH = "/delete";
const DELETE_BY_ID_LIST_PATH = "/delete-by-id-list"

const createAPIRequest = (URL) => {
  return {
    index: async () => {
      try {
        const response = await axios.get(BASE_URL + URL + INDEX_PATH);
        return response;
      } catch (error) {
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
        throw error;
      }
    },
    postAll: async (data) => {
      try {
        const response = await axios.post(BASE_URL + URL + ADD_ALL_PATH, data);
        return response;
      } catch (error) {
        throw error;
      }
    },
    put: async (id, data) => {
      try {
        const response = await axios.put(`${BASE_URL + URL + UPDATE_PATH}/${id}`, data);
        return response;
      } catch (error) {
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
    },
    deleteByIdList: async (ids) => {
      try {
        const response = await axios.delete(`${BASE_URL + URL + DELETE_BY_ID_LIST_PATH}/${ids}`);
        return response;
      } catch (error) {
        console.error('Erreur lors de la suppression des données:', error);
        throw error;
      }
    },
  };
};

export default createAPIRequest;
