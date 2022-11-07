import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import logo from "./assets/images/logo.png";
const corPrimaria = "#5451a6";
const App = () => {
  const [fonteCarregada] = useFonts({
    monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });
  /* A condicional abaixo serve para dar um pequeno tempo suficiente para o carregamento
  do arquivo de fonte antes do return do componente */
  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Image style={estilos.logo} source={logo} />
        <Text style={estilos.tituloApp}>Netfrix Filmes</Text>
      </View>
      <View style={estilos.viewBotoes}>
        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>Buscar Filmes</Text>
        </Pressable>
        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>Favoritos</Text>
        </Pressable>
      </View>
      <View style={estilos.viewRodape}>
        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoRodape}>Privacidade</Text>
        </Pressable>
        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoRodape}>Sobre</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    width: "81%",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  tituloApp: {
    fontSize: 36,
    fontFamily: "monoton",
    color: corPrimaria,
    /* fontWeight: "bold", */
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
  },
  botaoInicial: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: corPrimaria,
  },
  textoBotao: {
    color: "white",
  },
  viewRodape: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: corPrimaria,
  },
  botaoRodape: {
    padding: 16,
  },
  textoRodape: {
    color: "white",
  },
});
