import axios from "axios";

export class ProductServiceFake {
  baseUrl = "http://localhost:8080/products/";

  create(product) {
    return axios.post(this.baseUrl, product).then((res) => res.data);
  }

  readAll() {
    return fetch("data/products.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }

  update(product) {
    return axios.put(this.baseUrl, product).then((res) => res.data);
  }

  delete(product) {
    return axios.delete(this.baseUrl, product).then((res) => res.data);
  }
}
