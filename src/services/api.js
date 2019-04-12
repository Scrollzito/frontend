import axios from "axios";

const api = axios.create({
    baseURL: "https://scrollzitoapp.herokuapp.com/"
});

export default api;