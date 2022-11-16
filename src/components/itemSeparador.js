import { StyleSheet, Text, View } from "react-native";

const itemSeparador = () => {
  return (
    <View style={estilos.viewSeparador}>
      <View style={estilos.linha}></View>
    </View>
  );
};

export default itemSeparador;

const estilos = StyleSheet.create({
  viewSeparador: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16,
  },
  linha: {
    backgroundColor: "#5451a6",
    height: 1,
    width: "80%",
    opacity: 0.4,
  },
});
