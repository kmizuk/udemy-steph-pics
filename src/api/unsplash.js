import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID TKXAeOiOL0T0mt9fXJUkbMF0V8ZhyVWSrJlWhdc4a58",
  },
});
