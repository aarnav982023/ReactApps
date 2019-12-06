import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 711fcb3702cef94cadbc3a070d1af8472ebe13d25b7390736f5662fd67446014"
  }
});
