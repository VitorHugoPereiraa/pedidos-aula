import api from "./axios";

export default {
  getByCNPJ: async (cnpj = "") => {
    return api.get(cnpj);
  },
};
