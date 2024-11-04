import { Image, TouchableOpacity, View } from "react-native";
import { CaretLeft } from "phosphor-react-native";

import logoImg from "@assets/logo.png";
import { s } from "./styles";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <View style={s.container}>
      {showBackButton && (
        <TouchableOpacity style={s.backButton}>
          <CaretLeft size={32} color={s.backIcon.color} />
        </TouchableOpacity>
      )}

      <Image style={s.logo} source={logoImg} />
    </View>
  );
}
