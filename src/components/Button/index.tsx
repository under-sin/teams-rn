import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { s } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  type?: "primary" | "remove";
  title: string;
};

export function Button({ title, type = "primary", ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        s.container,
        type === "primary" ? s.primaryButton : s.removeButton,
      ]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={s.text}>{title}</Text>
    </TouchableOpacity>
  );
}
