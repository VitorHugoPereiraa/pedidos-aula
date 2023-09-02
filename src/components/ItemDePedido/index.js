import React from "react";
import { Text, View } from "react-native";

const ItemDePedido = ({ pedido }) => {
  const handleBackgroundColor = (status) => {
    //utilizando if e else para renderizar
    // if (status === 0) return "#c3c3c3";
    // if (status === 1) return "green";
    // if (status === 2) return "red";

    // return "#c3c3c3";

    //utilizando switch para renderizar
    switch (status) {
      case 0:
        return "#c3c3c3";
      case 1:
        return "green";
      case 2:
        return "red";
      default:
        return "#c3c3c3";
    }
  };
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: handleBackgroundColor(pedido.status),
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <Text>{pedido.client}</Text>
    </View>
  );
};

export default ItemDePedido;
