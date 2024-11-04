import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { s } from "./styles";

type FilterProps = TouchableOpacityProps & {
  isActive?: boolean;
  title: string;
};

export function Filter({ title, isActive = false, ...props }: FilterProps) {
  return (
    <TouchableOpacity
      style={[s.container, isActive && s.active]}
      activeOpacity={0.7}
      {...props}
    >
      <Text style={s.title}>{title}</Text>
    </TouchableOpacity>
  );
}
