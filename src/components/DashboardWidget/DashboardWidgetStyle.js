import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useDashboardWidgetStyle = createUseStyles({
  container: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-between",
  },
  widgetCard: {
    borderRadius: "12px",
    margin: "5px",
    width: "400px",
    height: "200px",
    overflow: "hidden",
    background: "white",
  },
  chartSkeleton: {
    margin: "10px",
    width: "95%",
  },
});

export default useDashboardWidgetStyle;
