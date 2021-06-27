import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Login Page", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("on submission", () => {
    let mockLogin;

    beforeEach(() => {
      mockLogin = jest.fn(() => ({ token: { token: "aaa", name: "sasas" } }));
      jest.mock("../../service/loginAPI", () => ({
        loginAccount: mockLogin,
      }));
      jest.mock("react-router-dom", () => ({ useHistory: jest.fn(() => []) }));

      const LoginPage = require("../Login").default;

      render(<LoginPage />);

      fireEvent.change(screen.getByTestId("id-number"), {
        target: { value: "00" },
      });
      fireEvent.change(screen.getByTestId("name"), {
        target: { value: "Danica" },
      });

      fireEvent.click(screen.getByTestId("login-button"));
    });

    it("should navigate to dashboard page", () => {
      expect(mockLogin).toHaveBeenCalled();
    });
  });

  describe("on loading", () => {
    it("should render form elements", () => {
      const LoginPage = require("../Login").default;
      render(<LoginPage />);
      screen.getByTestId("id-number");
      screen.getByTestId("name");
    });
  });
});
