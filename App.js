import Home from "./src/screen/Home";
import { StyleSheet, StatusBar } from "react-native";
import FormBusca from "./src/screen/FormBusca";
import Favoritos from "./src/screen/Favoritos";
import Sobre from "./src/screen/Sobre";
import Privacidade from "./src/screen/Privacidade";

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Home />
    </>
  );
};

export default App;

const estilos = StyleSheet.create({});
