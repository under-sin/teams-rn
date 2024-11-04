import { theme } from "@themes/index";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    height: 56,
    width: 56,

    justifyContent: "center",
    textAlign: "center",

    marginLeft: 12,
  },
  primaryButton: {
    textAlign: "center",
    color: theme.colors.violet_400,
  },
  secondaryButton: {
    textAlign: "center",
    color: theme.colors.red_400,
  },
});
