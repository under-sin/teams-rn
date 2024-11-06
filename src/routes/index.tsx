import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";

import { theme } from "@themes/index";

export function Routes() {
  const { colors } = theme;

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray_700 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
