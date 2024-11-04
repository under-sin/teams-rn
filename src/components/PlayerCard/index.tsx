import { Text, View } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import { ButtonIcon } from "@components/ButtonIcon";

import { s } from "./styles";

type PlayerCardProps = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <View style={s.container}>
      <Icon name="person" style={s.icon} />
      <Text style={s.playerName}>{name}</Text>
      <ButtonIcon
        iconName="remove-circle-outline"
        type="secondary"
        onPress={onRemove}
      />
    </View>
  );
}
