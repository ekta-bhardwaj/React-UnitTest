import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  waitFor,
} from "@testing-library/react";
import TestElements from "./TestElements";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
it("should equal to ", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("counter")).toHaveTextContent(0);
});

it("should be enabled", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("button-up")).toBeEnabled();
  expect(getByTestId("button-down")).toBeEnabled();
});

it("should be enabled", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("button-ok")).toBeDisabled();
});

it("increments counter", async () => {
  const { getByTestId, getByText } = render(<TestElements />);
  fireEvent.click(getByTestId("button-up"));
  const counter = await waitFor(() => getByText("1"));
  expect(counter).toHaveTextContent("1");
});

it("decrements counter", () => {
  const { getByTestId } = render(<TestElements />);

  fireEvent.click(getByTestId("button-down"));

  expect(getByTestId("counter")).toHaveTextContent("-1");
});

it("increments counter after 0.5s", async () => {
  const { getByTestId, getByText } = render(<TestElements />);

  fireEvent.click(getByTestId("button-up"));

  const counter = await waitFor(() => getByText("1"));

  expect(counter).toHaveTextContent("1");
});
