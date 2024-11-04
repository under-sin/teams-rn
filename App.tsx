import { Loading } from "@components/Loading";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { Players } from "@screens/Players";
import { NewGroup } from "@screens/NewGroup";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  // vai retornar o componente Group se as fontes estiverem carregadas
  // caso contrário, vai retornar um ActivityIndicator (loading)
  return (
    <>
      {/* StatusBar é a barra de status do celular */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Players /> : <Loading />}
    </>
  );
}
