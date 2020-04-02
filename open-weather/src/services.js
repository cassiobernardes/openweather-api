import axios from "axios";

export const api = {
  get(endpoint, city, key) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5${endpoint}?q=${city}&appid=${key}`
    );
  }
};
