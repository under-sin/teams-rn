import { UsersThree } from "phosphor-react-native";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { s } from "./styles";

type GroupCardProps = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <TouchableOpacity style={s.container} {...rest} activeOpacity={0.7}>
      <UsersThree weight="fill" size={32} style={s.icon} />

      <Text style={s.title}>{title}</Text>
    </TouchableOpacity>
  );
}
