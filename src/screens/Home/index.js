import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import api from "../../services/api";
import ItemDePedido from "../../components/ItemDePedido";

const Home = (props) => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        let res = await api.pegarPedidos();
        setPedidos(res);
        setLoading(false);
      })();
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {pedidos.map((pedido) => {
            return <ItemDePedido pedido={pedido} />;
          })}
        </View>
      )}

      {/* {loading && <ActivityIndicator />}
      {!loading && (
        <View>
          {pedidos.map((pedido) => (
            <Text key={pedido.id}>{pedido.client}</Text>
          ))}
        </View>
      )} */}
    </View>
  );
};

export default Home;
