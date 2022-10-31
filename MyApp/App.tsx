import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";


// Renderiza a tela principal do App
const App = () => {
  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Routes />
    </Background>
  )
};

export default App;
