import { StyleSheet } from "react-native";

import { theme } from "@themes/index";

const { colors } = theme;

export const s = StyleSheet.create({
  containe: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.gray_700,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
    color: colors.violet_400,
  },
});
