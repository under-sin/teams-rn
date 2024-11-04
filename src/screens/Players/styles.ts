import { StyleSheet } from "react-native";

import { theme } from "@themes/index";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 42,

    backgroundColor: theme.colors.gray_700,
  },
  form: {
    width: "100%",
    backgroundColor: theme.colors.gray_800,

    flexDirection: "row",
    justifyContent: "center",

    borderRadius: 8,
  },
  headerList: {
    marginTop: 24,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  numbersOfPlayers: {
    fontFamily: theme.font_familty.bold,
    fontSize: theme.font_size.sm,
    color: theme.colors.gray_200,
  },
});
