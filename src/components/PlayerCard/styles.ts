import { theme } from "@themes/index";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    height: 54,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: theme.colors.gray_600,

    borderRadius: 8,
    marginBottom: 16,
  },
  playerName: {
    flex: 1,
    fontFamily: theme.font_familty.regular,
    fontSize: theme.font_size.md,
    color: theme.colors.gray_200,
  },
  icon: {
    fontSize: 24,
    color: theme.colors.gray_200,
    marginLeft: 16,
    marginRight: 4,
  },
});
