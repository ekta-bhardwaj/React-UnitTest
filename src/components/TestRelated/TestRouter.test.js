import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import TestRouter from "./TestRouter";

import "@testing-library/jest-dom/extend-expect";

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("should render the To Do page", () => {
  const { container, getByTestId } = renderWithRouter(<TestRouter />);
  const navbar = getByTestId("navbar");
  const link = getByTestId("to-do");

  expect(container.innerHTML).toMatch("To Do");
  expect(navbar).toContainElement(link);
});

it("should navigate to the Add,subtarct,Search page", () => {
  const { container, getByTestId } = renderWithRouter(<TestRouter />);

  fireEvent.click(getByTestId("add-subtract-search"));

  expect(container.innerHTML).toMatch("Add,subtarct,Search");
});
