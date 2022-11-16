import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  View,
} from "react-native";

/* Prop de route para acesso aos dados trafegados entre as telas/rotas */
const Detalhes = ({ route }) => {
  /* Extraindo dos parâmetros da rota os dados do objeto filmne */
  const { filme } = route.params;

  return (
    <SafeAreaView style={estilos.container}>
      <ImageBackground
        style={estilos.imagem}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`,
        }}
      ></ImageBackground>
      <Text style={estilos.titulo}>{filme.title}</Text>
      <View style={estilos.conteudo}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>
            Avaliação: {filme.vote_average} | Lançamento: {filme.release_date}
          </Text>
          <Text style={estilos.descricao}>
            {filme.overview || "Sem descrição"}
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    height: 200,
    justifyContent: "center",
  },
  titulo: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: 16,
    fontWeight: "bold",
    fontSize: 16,
  },
  conteudo: {
    flex: 1,
    padding: 16,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 16,
  },
});
