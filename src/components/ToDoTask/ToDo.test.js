import React from "react";
import ToDo from "./ToDo";
import { mount } from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("The default UI", () => {
  window.alert = jest.fn();
  const app = mount(<ToDo />);
  it("Renders two default todo items", () => {
    const app = mount(<ToDo />);
    expect(app.find(".ToDoItem").length).toBe(2);
  });
  it("Has an input field", () => {
    const app = mount(<ToDo />);
    expect(app.find(".ToDoInput").length).toEqual(1);
  });
  it("Has an add button", () => {
    const app = mount(<ToDo />);
    expect(app.find(".ToDo-Add").length).toEqual(1);
  });
  it("When the add button is pressed, if the input field is empty, prevent item from being added", () => {
    const app = mount(<ToDo />);
    app.find(".ToDo-Add").simulate("click");
    expect(app.find(".ToDoItem").length).toBe(2);
  });
  it("When the add button is pressed, if the input field is empty, prevent item from being added", () => {
    app.find(".ToDo-Add").simulate("click");
    expect(window.alert).toHaveBeenCalled();
  });

  it("When the add button is pressed, if the input field has text, it creates a new todo item", () => {
    const event = { target: { value: "Create more tests" } };
    app.find("input").simulate("change", event);
    app.find(".ToDo-Add").simulate("click");
    expect(
      app
        .find(".ToDoItem-Text")
        .at(2)
        .text()
    ).toEqual("Create more tests");
  });
});

//*****************Testing Library**********************

// import { render, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
// describe("<ToDo>", () => {
//   debugger;
//   it("Renders two default todo items", () => {
//     const { getByText } = render(<ToDo />);
//     expect(getByText("clean the house")).toBeInTheDocument();
//     expect(getByText("buy milk")).toBeInTheDocument();
//   });
//   it("Has an input field", () => {
//     const { getByTestId } = render(<ToDo />);
//     expect(getByTestId("todo-input")).toBeInTheDocument();
//   });
//   it("Has an add button", () => {
//     const { getByTestId } = render(<ToDo />);
//     expect(getByTestId("add").textContent).toBe("+");
//   });
//   it("When the add button is pressed, if the input field is empty, prevent item from being added", () => {
//     const { getByTestId } = render(<ToDo />);
//     window.alert = jest.fn();

//     fireEvent.click(getByTestId("add"));
//     expect(window.alert).toHaveBeenCalled();
//   });
//   it("When the add button is pressed, if the input field has text, it creates a new todo item", async () => {
//     const { getByTestId, getByText } = render(<ToDo />);

//     fireEvent.change(getByTestId("todo-input"), {
//       target: { value: "Create more tests" }
//     });
//     expect(getByTestId("todo-input").value).toBe("Create more tests");

//     fireEvent.click(getByTestId("add"));
//     expect(getByText("Create more tests")).toBeInTheDocument();
//   });
// });
