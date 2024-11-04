import { ActivityIndicator, View } from "react-native";

import { s } from "./styles";
import { theme } from "@themes/index";

export function Loading() {
  return (
    <View style={s.container}>
      <ActivityIndicator color={theme.colors.violet_400} />
    </View>
  );
}
