import { theme } from "@themes/index";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 56,
    maxHeight: 56,
    borderRadius: 8,
    padding: 16,

    backgroundColor: theme.colors.gray_800,
    color: theme.colors.white,
    fontSize: theme.font_size.md,
  },
});
