import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const FormBusca = ({ navigation }) => {
  /* Captura em tempo real do que é digitado 
  no textInput através do evento onChangeText */
  const filmeDigitado = (valorDigitado) => {
    setFilme(valorDigitado);
  };
  /*  Função chamada toda vez que o botão for pressionado
  (usamos a prop onPress do Button) */
  const buscarFilmes = () => {
    /* Se filme (gerenciado pelo useState) estiver vazio/undefined/falsy */
    if (!filme) {
      return Alert.alert("Ops!", "Você deve digitar um filme!");
    }
    //Alert.alert("Você procurou por: ", filme);
    /* Usamos a prop navigation (que vem do React Navigation programado no App)
    para acessar uma nova tela(no caso, Resultados). Para esta tela,
    passamos como objeto os dados digitados no formulário (neste caso, filme)  */
    navigation.navigate("Resultados", { filme });
  };
  /* Hook useState para monitorar/armazenar o filme
  que será buscado a apartir do formulário */
  const [filme, setFilme] = useState("");
  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.texto}>
        Star Trek? O poderoso Chefão? A trilogia Senhor dos Anéis?
      </Text>
      <Text style={estilos.texto}>
        Localize um filme que você viu ou gostaria de ver!
      </Text>
      <View style={estilos.viewProcurar}>
        <Ionicons name="film" size={48} color="black" />
        <TextInput
          style={estilos.input}
          placeholder="Digite o filme..."
          onChangeText={filmeDigitado}
        />
      </View>
      <Button title="PROCURAR" color="#5451a6" onPress={buscarFilmes} />
    </SafeAreaView>
  );
};

export default FormBusca;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  texto: {
    fontSize: 16,
    paddingVertical: 8,
  },
  viewProcurar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    flex: 0.95,
  },
});
