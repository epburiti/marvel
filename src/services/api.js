import axios from 'axios';
import crypto from 'crypto';

const api = axios.create({
  baseURL: ""
});

api.interceptors.request.use(
  async config => {
    const nowTimeStamp = new Date().getTime();
    const publicKey = "eb18744d1051cd78e704267fb942c634";
    const privateKey = "dc48872f5cb0cc3749f225a43830609873134af6";

    const hash = crypto.createHash("md5").update(`${nowTimeStamp}${privateKey}${publicKey}`).digest("hex");

    config.url += `&ts=${nowTimeStamp}&apikey=${publicKey}&hash=${hash}`

    return config;
  },
  error => {
    Promise.reject(error)
  });

export default api;