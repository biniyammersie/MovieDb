
import axios from "axios";

const Movieinstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { Movieinstance };

