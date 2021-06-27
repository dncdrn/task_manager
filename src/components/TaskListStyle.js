import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useTaskListStyle = createUseStyles({
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexFlow: "wrap",
  },
  input: {
    marginRight: "10px",
  },
  container: { display: "flex", alignSelf: "center" },
  completedContainer: {
    display: "flex",
    alignItems: "center",
  },
  completedTitle: {
    // paddingBottom: "2px",
    fontSize: "64px !important",
    color: "#5285EC !important",
  },
  taskContainer: {
    borderRadius: "12px",
  },
  modalButton: {
    marginTop: "10px",
    width: "100%",
  },
});

export default useTaskListStyle;
