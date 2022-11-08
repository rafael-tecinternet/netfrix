import Home from "./src/screen/Home";
import { StyleSheet } from "react-native";
import FormBusca from "./src/screen/FormBusca";
import { StatusBar } from "expo-status-bar";
import Favoritos from "./src/screen/Favoritos";
import Sobre from "./src/screen/Sobre";

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Sobre />
    </>
  );
};

export default App;

const estilos = StyleSheet.create({});
