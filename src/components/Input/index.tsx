import { TextInput, TextInputProps } from "react-native";
import { s } from "./styles";
import { theme } from "@themes/index";

type InputProps = TextInputProps & {
  placeholder: string;
};

export function Input({ placeholder, ...rest }: InputProps) {
  return (
    <TextInput
      style={s.container}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.gray_300}
      {...rest}
    />
  );
}
