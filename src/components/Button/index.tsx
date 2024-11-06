import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { s } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  type?: "primary" | "remove";
  title: string;
  disabled?: boolean;
};

export function Button({
  title,
  type = "primary",
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        s.container,
        type === "primary" ? s.primaryButton : s.removeButton,
        disabled && s.disabledButton,
      ]}
      disabled={disabled}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={s.text}>{title}</Text>
    </TouchableOpacity>
  );
}
