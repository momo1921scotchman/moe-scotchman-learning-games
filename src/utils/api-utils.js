export const API_URL = "http://localhost:8080";

export const getVideosEndpoint = () => API_URL + "/videos";

export const getVideoEndpoint = (id) => API_URL + "/videos/" + id;

export const getWordsEndpoint = () => API_URL + "/words";
