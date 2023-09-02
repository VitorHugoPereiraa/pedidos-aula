//status 0 === novo
//status 1 === em andamento
//status 2 === finalizado
let pedidos = [
  {
    id: 1,
    client: "Cristiano",
    date: "2023-11-20",
    products: [],
    status: 0,
  },
  {
    id: 2,
    client: "Vitor",
    date: "2023-09-20",
    products: [],
    status: 1,
  },
  {
    id: 3,
    client: "Lucas",
    date: "2023-12-20",
    products: [],
    status: 2,
  },
];

export default {
  pegarPedidos: async () => {
    return pedidos;
  },
};
