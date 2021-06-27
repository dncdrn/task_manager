import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    padding: "40px",
    minHeight: "90vh",
    "& div": {
      color: "#537178 !important",
    },
  },
  modalButton: {
    marginTop: "10px",
    width: "100%",
  },
  cardContainer: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#F4F4F6",
  },
  card: {
    width: "300px",
  },
  noTaskButton: {
    width: "100%",
  },
  logoutLabel: {
    float: "right",
    fontWeight: "bold",
  },
});

export default useStyles;
