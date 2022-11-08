import Home from "./src/screen/Home";
import { StyleSheet } from "react-native";
import FormBusca from "./src/screen/FormBusca";
import { StatusBar } from "expo-status-bar";
import Favoritos from "./src/screen/Favoritos";

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Favoritos />
    </>
  );
};

export default App;

const estilos = StyleSheet.create({});
