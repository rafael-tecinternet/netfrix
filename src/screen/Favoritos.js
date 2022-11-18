import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const dados = await AsyncStorage.getItem("@favoritos");
        const filmes = JSON.parse(dados);
        if (dados != null) {
          setListaFavoritos(filmes);
        }
      } catch (error) {
        console.log("Deu ruim no carregamento: " + error.message);
      }
    }
    carregarFavoritos();
  }, []);

  const verDetalhes = (filmeSelecionado) => {
    navigation.navigate("Detalhes", { filme: filmeSelecionado });
  };

  const excluirFavoritos = async () => {
    Alert.alert(
      "Excluir TODOS?",
      "Tem certeza que deseja excluir TODOS os favoritos ?",
      [
        {
          text: "Cancelar",
          onPress: () => {
            return false;
          },
          style: "cancel", // SOMENTE NO IOS
        },
        {
          text: "Sim",
          onPress: async () => {
            await AsyncStorage.removeItem("@favoritos");
            setListaFavoritos([]);
          },
          style: "destructive", //SOMENTE NO IOS
        },
      ]
    );
  };
  const excluirUmFavoritos = async (indice) => {
    //Alert.alert(`Excluir filme no índice: ${indice}`);
    /* Etapas para eclusão do filme escolhido */
    /* 1) Conhecendo o índice, remover o elemento(filme do array listaFavoritos) */
    /* splice: indicamos o índice de referência (na prática, o índice do filme que queremos
      remover e, a partir deste índice, a quantidadecde elementos que queremos remover.
      Como aqui queremos apagar somente o próprio filme escolhido, passamos 1) */
    listaFavoritos.splice(indice, 1);
    /* 2) Atualizar o storage com a lista atualizada (ou seja, sem o filme ) */
    /* Obs.: é necessário transformar em string antes de gravar no Storage */
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaFavoritos));
    /* 3) Recarregar do storage a nova lista de favoritos */
    /* Obs.: é necessário transformar em array/objetos antes de manipular na aplicação */
    const listaDeFilmes = JSON.parse(await AsyncStorage.getItem("@favoritos"));
    /* 4) Atualizar o state para um novo render na tela com a lista de favoritos */
    setListaFavoritos(listaDeFilmes);
  };
  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Quantidade: {listaFavoritos.length}</Text>
          <Pressable
            style={estilos.botaoExcluirTudo}
            onPress={excluirFavoritos}
          >
            <Text style={estilos.textoExcluirTudo}>
              <Ionicons name="trash-outline" size={16} />
              Excluir Favoritos
            </Text>
          </Pressable>
        </View>
        {listaFavoritos.map((filmeFavorito, indice) => {
          return (
            <Pressable
              // onPress={verDetalhes}
              // onPress={() => verDetalhes(filmeFavoritos)}
              onPress={verDetalhes.bind(this, filmeFavorito)}
              key={filmeFavorito.id}
              style={estilos.itemFilme}
            >
              <Text style={estilos.titulo}>{filmeFavorito.title}</Text>
              <Pressable
                style={estilos.botaoExcluir}
                // onPress={excluirUmFavoritos}
                // onPress={() => excluirUmFavoritos(indice)}
                onPress={excluirUmFavoritos.bind(this, indice)}
              >
                <Ionicons name="trash" size={16} color="white" />
              </Pressable>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;

const estilos = StyleSheet.create({
  safeContainer: { flex: 1 },
  container: {
    flex: 1,
    padding: 8,
  },
  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#d3d3d3",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  botaoExcluir: {
    backgroundColor: "#c0220b",
    padding: 8,
    borderRadius: 4,
  },
  cabecalho: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoExcluirTudo: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    borderRadius: 4,
  },
  textoExcluirTudo: {
    color: "#c0220b",
  },
  titulo: { flex: 1, fontSize: 14 },
});
