import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ScrollView, Text, View } from "react-native";

const Home = (props) => {
  const [socios, setSocios] = useState([]);
  const [sociosFX7, setSociosFX7] = useState([]);
  const [sociosFX6, setSociosFX6] = useState([]);
  useEffect(() => {
    // (async function () {})();
    // (async () => {})();
    (async () => {
      let data = await api.getByCNPJ("61186888009301");
      let socios_ = data.data.qsa;
      setSocios(socios_);
      //filtrar os socios que possui codigo_faixa_etaria igual a 7
      setSociosFX7(socios_.filter((socio) => socio.codigo_faixa_etaria === 7));

      //filtrar os socios que possui codigo_faixa_etaria igual a 5
      setSociosFX6(socios_.filter((socio) => socio.codigo_faixa_etaria === 5));
    })();
  }, []);
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
};

export default Home;
