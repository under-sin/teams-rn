import { theme } from "@themes/index";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 32,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: theme.font_familty.bold,
    color: theme.colors.white,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: theme.font_familty.regular,
    color: theme.colors.gray_300,
  },
});
