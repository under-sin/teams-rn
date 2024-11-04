import { theme } from "@themes/index";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    borderRadius: 8,
    backgroundColor: theme.colors.gray_600,
    marginBottom: 12,
  },
  title: {
    fontSize: theme.font_size.md,
    color: theme.colors.gray_200,
    fontFamily: theme.font_familty.regular,
  },
  icon: {
    marginRight: 20,
    color: theme.colors.violet_400,
  },
});
