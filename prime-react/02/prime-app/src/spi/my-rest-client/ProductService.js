import axios from "axios";

export class ProductService {
  baseUrl = "http://localhost:8080/products/";

  create(product) {
    return axios.post(this.baseUrl, product).then((res) => res.data);
  }

  readAll() {
    return axios.get(this.baseUrl).then((res) => res.data);
  }

  update(product) {
    return axios.put(this.baseUrl, product).then((res) => res.data);
  }

  delete(product) {
    return axios.delete(this.baseUrl, product).then((res) => res.data);
  }
}
