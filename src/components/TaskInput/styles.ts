import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    paddingLeft: 6,
    height: 56,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    backgroundColor: "#262626",
    marginRight: 12,
    flex: 1,
    color: "#F2F2F2",
  },
  inputOnFocus: {
    paddingLeft: 6,
    height: 56,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    backgroundColor: "#262626",
    marginRight: 12,
    flex: 1,
    borderWidth: 1,
    borderColor: "#5E60CE",
    color: "#F2F2F2",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
});
