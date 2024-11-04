import { theme } from "@themes/index";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    borderRadius: 4,
    marginRight: 12,
    height: 38,
    width: 70,

    justifyContent: "center",
    alignContent: "center",
  },
  active: {
    borderStyle: "solid",
    borderColor: theme.colors.violet_400,
    borderWidth: 1,
  },
  title: {
    textTransform: "uppercase",
    fontFamily: theme.font_familty.bold,
    fontSize: theme.font_size.sm,
    color: theme.colors.white,
    textAlign: "center",
  },
});
