import { StyleSheet } from "react-native";

import { theme } from "@themes/index";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: theme.colors.gray_700,
  },
});
