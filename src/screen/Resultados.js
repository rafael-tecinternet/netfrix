import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import api from "../services/api";

const Resultados = ({ route }) => {
  /* Usamos a prop route (do React Navigation) para acessar os 
  parâmetros desta rota de navegação e extrair os dados 
  (neste caso, filme) enviados para esta tela Resultados */
  const { filme } = route.params;

  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get("/search/movie", {
          params: {
            api_key: "b5456a8cdbb2ea7796a8befd71b923cb",
            language: "pt-BR",
            query: filme,
            include_adult: false,
          },
        });
        setResultados(resposta.data.results);
      } catch (error) {
        console.log("Deu Ruim na busca da API: " + error.message);
      }
    }
    buscarFilmes();
  }, []);
  console.log(resultados);
  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}.</Text>
      <View style={estilos.viewFilmes}>
        {resultados.map((resultado) => {
          return <Text key={resultado.id}>{resultado.title}</Text>;
        })}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;

const estilos = StyleSheet.create({
  viewFilmes: {
    marginVertical: 8,
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
