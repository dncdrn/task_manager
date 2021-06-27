import { render, screen, cleanup } from "@testing-library/react";
import Login from "../../page/Login";
import TaskItem from "../DashboardTaskList/TaskItem";

test("should render login page", () => {
  render(<TaskItem />);
  const loginElement = screen.getByTestId("login");
  // expect(loginElement).toHaveTextContent("Login");
  expect(loginElement).toBeInTheDocument();
  //   expect(true).toBe(true);
});
