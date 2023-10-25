import axios from "axios";

export default axios.create({
  baseURL: "https://brasilapi.com.br/api/cnpj/v1/",
});
