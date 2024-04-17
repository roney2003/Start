import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTJkOTIxZWU2ZjBhZDNiZDc3ZWViYmNiMmI3MjBiMSIsInN1YiI6IjY2MTIxZTdlMTEwOGE4MDE2NDhjZTM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZtPKYDsApmUb1_Pg0-2xSS-gUNYNi1N6xjJBNi2uHM0",
  },
});

export default instance;
