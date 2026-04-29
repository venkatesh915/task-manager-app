import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-app-m9qj.onrender.com/api/tasks"
});

export default API;
