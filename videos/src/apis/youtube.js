import axios from "axios";

const KEY = "AIzaSyDoiB-YMHxB5wiRHp7yhfKP6iDSbOQasqY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY
  }
});
