import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { s } from "./styles";

type ButtonIconProps = TouchableOpacityProps & {
  // dessa forma o componente ButtonIcon só aceita ícones que existem no MaterialIcons.glyphMap
  iconName: keyof typeof MaterialIcons.glyphMap;
  type?: "primary" | "secondary";
};

export function ButtonIcon({ iconName, type = "primary" }: ButtonIconProps) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.7}>
      <MaterialIcons
        size={24}
        name={iconName}
        style={type === "primary" ? s.primaryButton : s.secondaryButton}
      />
    </TouchableOpacity>
  );
}
