import { theme } from "@themes/index";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    textAlign: "center",
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_familty.regular,
    color: theme.colors.gray_300,
  },
});
