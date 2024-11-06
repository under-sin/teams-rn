import { StyleSheet } from "react-native";

import { theme } from "@themes/index";

const { colors, font_familty, font_size } = theme;

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,

    backgroundColor: colors.gray_700,
  },
  form: {
    width: "100%",
    backgroundColor: colors.gray_800,

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
    fontFamily: font_familty.bold,
    fontSize: font_size.sm,
    color: colors.gray_200,
  },
});
