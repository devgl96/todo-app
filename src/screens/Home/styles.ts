import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 24,
  },
  logo: {
    width: "100%",
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  inputArea: {
    marginTop: 40,
  },
  statusContainer: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  createdTaskStatus: {
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  completedTaskStatus: {
    color: "#8284FA",
    fontWeight: "bold",
  },
  amountTasks: {
    backgroundColor: "#333333",
    borderRadius: 10,
    marginLeft: 10,
    width: 25,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
  },
  textAmountTasks: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  tasksContainer: {
    width: "100%",
    marginTop: 30,
  },
  noTasksContainer: {
    marginTop: 10,
    borderTopColor: "#333333",
    borderTopWidth: 2,
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  noTasksTextBold: {
    color: "#808080",
    fontWeight: "bold",
  },
  noTasksText: {
    color: "#808080",
  },
});
