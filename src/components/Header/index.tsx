import { Image, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";

import logoImg from "@assets/logo.png";

import { s } from "./styles";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <View style={s.container}>
      {showBackButton && (
        <TouchableOpacity style={s.backButton} onPress={handleGoBack}>
          <View>
            <CaretLeft size={32} color={s.backIcon.color} />
          </View>
        </TouchableOpacity>
      )}

      <Image style={s.logo} source={logoImg} />
    </View>
  );
}
