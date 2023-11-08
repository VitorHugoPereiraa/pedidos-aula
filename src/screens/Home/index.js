import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ScrollView, Text, View } from "react-native";

const Home = (props) => {
  const [estaPronto, setEstaPronto] = useState(0);
  const [socios, setSocios] = useState([]);
  const [sociosFX7, setSociosFX7] = useState([]);
  const [sociosFX6, setSociosFX6] = useState([]);
  let a = [1, 2, 3];
  for (let i in a) {
    console.log(i);
  }

  // if (estaPronto === 0) {
  //   return <Text>Não pronto...</Text>;
  // } else if (estaPronto === 1) {
  //   return <Text>Carregando...</Text>;
  // } else if (estaPronto === 2) {
  //   return (
  //     <ScrollView style={{ flex: 1, padding: 20 }}>
  //       <Text style={{ marginVertical: 20 }}>
  //         TODOS OS SOCIOS COM FAIXA ETARIA 7 - QTY {sociosFX7.length}:
  //       </Text>
  //       {sociosFX7.map((socio) => {
  //         return <Text>{socio.nome_socio}</Text>;
  //       })}
  //       <Text style={{ marginVertical: 20 }}>
  //         TODOS OS SOCIOS COM FAIXA ETARIA 5 - QTY {sociosFX6.length}:
  //       </Text>
  //       {sociosFX6.map((socio) => (
  //         <Text>{socio.nome_socio}</Text>
  //       ))}
  //     </ScrollView>
  //   );
  // } else {
  //   return <Text>Não encontrado</Text>;
  // }

  switch (estaPronto) {
    case 0:
      return <Text>Não pronto...</Text>;
      break;
    case 1:
      return <Text>Carregando...</Text>;
      break;
    case 2:
      return (
        <ScrollView style={{ flex: 1, padding: 20 }}>
          <Text style={{ marginVertical: 20 }}>
            TODOS OS SOCIOS COM FAIXA ETARIA 7 - QTY {sociosFX7.length}:
          </Text>
          {sociosFX7.map((socio) => {
            return <Text>{socio.nome_socio}</Text>;
          })}
          <Text style={{ marginVertical: 20 }}>
            TODOS OS SOCIOS COM FAIXA ETARIA 5 - QTY {sociosFX6.length}:
          </Text>
          {sociosFX6.map((socio) => (
            <Text>{socio.nome_socio}</Text>
          ))}
        </ScrollView>
      );
      break;
    default:
      return <Text>Não encontrado</Text>;
      break;
  }
};

export default Home;
