import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import api from "../services/api";
import apiKey from "../../apiKey";
import Loading from "../components/Loading";
import CardFilme from "../components/CardFilme";
import itemSeparador from "../components/itemSeparador";
import itemVazio from "../components/itemVazio";
const Resultados = ({ route }) => {
  /* Usamos a prop route (do React Navigation) para acessar os 
  parâmetros desta rota de navegação e extrair os dados 
  (neste caso, filme) enviados para esta tela Resultados */
  const { filme } = route.params;

  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);
  /* useEffect: hook do React que executa operações no momento 
  em que o componente (neste caso, Resultado) é renderizado */
  useEffect(() => {
    /* Assim que entrarmos em Resultado, é executada a função 
    async buscarFilmes que por sua vez através do axios executa
    a consulta à API baseada no filme que foi digitado. */
    async function buscarFilmes() {
      try {
        /* Aguardamos a resposta da consulta get ao endpoint
        "/search/movie" da api. Observe que este endpoint precisa 
        de parâmetros para a execução correta da consulta. Estes parâmetros
        DEVEM ter o mesmo nome indicado na documentação do endpoint/API. */
        const resposta = await api.get("/search/movie", {
          params: {
            api_key: apiKey,
            language: "pt-BR",
            query: filme,
            include_adult: false,
          },
        });
        setResultados(resposta.data.results);
        setInterval(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log("Deu Ruim na busca da API: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}.</Text>
      {/* Sintaxe de if valuate usando &&, se loading for true, renderize <Loading/> */}
      {loading && <Loading />}
      <View style={estilos.viewFilmes}>
        {/* Se o loading for false, renderize o resultado map */}
        {!loading && (
          <FlatList
            ItemSeparatorComponent={itemSeparador}
            ListEmptyComponent={itemVazio}
            data={resultados}
            renderItem={({ item }) => {
              return <CardFilme filme={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
        )}
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
