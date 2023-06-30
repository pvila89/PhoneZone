import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://itx-frontend-test.onrender.com/api"
});

class ApiClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll() {
    console.log("hola");
    console.log(this.endpoint);
    return axiosInstance.get(this.endpoint).then(res => res.data);
  }

  get(id) {
    return axiosInstance.get(this.endpoint + '/' + id).then(res => res.data);
  }
}

export default ApiClient;
