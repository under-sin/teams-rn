import { theme } from "@themes/index";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 56,
    maxHeight: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.violet_600,
  },
  primaryButton: {
    backgroundColor: theme.colors.violet_600,
  },
  removeButton: {
    backgroundColor: theme.colors.red_700,
  },
  disabledButton: {
    opacity: 0.6,
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.font_size.md,
    fontFamily: theme.font_familty.regular,
  },
});
