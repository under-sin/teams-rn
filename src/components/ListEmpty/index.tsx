import { Text, View } from "react-native";
import { s } from "./styles";

type ListEmptyProps = {
  message: string;
};

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <View style={s.container}>
      <Text style={s.message}>{message}</Text>
    </View>
  );
}
