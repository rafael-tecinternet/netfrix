import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const FormBusca = () => {
  const [texto, onChangeText] = React.useState();
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
          onChangeText={onChangeText}
          value={texto}
          placeholder="Digite o filme..."
        />
      </View>
      <Button title="PROCURAR" color="#5451a6" />
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
