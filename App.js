import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screen/Home";
import FormBusca from "./src/screen/FormBusca";
import Favoritos from "./src/screen/Favoritos";
import Sobre from "./src/screen/Sobre";
import Privacidade from "./src/screen/Privacidade";

const App = () => {
  /* Iniciando através de uma constante o 
  gerenciador de navegação Stack (pilha de telas) */
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar />
      {/* O NavigationContainer deve envolver todas as telas navegáveis do nosso APP. */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={FormBusca} name="FormBusca" />
          <Stack.Screen component={Favoritos} name="Favoritos" />
          <Stack.Screen component={Privacidade} name="Privacidade" />
          <Stack.Screen component={Sobre} name="Sobre" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const estilos = StyleSheet.create({});
