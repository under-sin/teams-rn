import { StyleSheet } from "react-native";

import { theme } from "@themes/index";

const { colors } = theme;

export const s = StyleSheet.create({
  containe: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.gray_700,
  },
});
