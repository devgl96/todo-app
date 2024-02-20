import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 74,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    marginBottom: 10,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333333",
  },
  contentContainer: {
    flex: 1,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    color: "#F2F2F2",
    width: "70%",
  },
  dateContent: {
    color: "#F2F2F2",
    fontSize: 12,
  },
  completedContent: {
    textDecorationLine: "line-through",
    color: "#808080",
    width: "70%",
  },
});
