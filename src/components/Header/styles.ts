import { theme } from "@themes/index";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: 46,
    height: 55,
  },
  backButton: {
    flex: 1,
  },
  backIcon: {
    color: theme.colors.white,
  },
});
