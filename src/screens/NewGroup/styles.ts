import { StyleSheet } from "react-native";

import { theme } from "@themes/index";

export const s = StyleSheet.create({
  containe: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 42,
    backgroundColor: theme.colors.gray_700,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
    color: theme.colors.violet_400,
  },
});
