import React from "react";
import ToDoItem from "./ToDoItem";
import ToDo from "./ToDo";
import { mount } from "enzyme";

// import Enzyme from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// Enzyme.configure({ adapter: new Adapter() });
// describe("<ToDoItem/>", () => {
//   debugger;
//   it("When the delete button is pressed for the first todo item, it removes the entire item", () => {
//     const app = mount(<ToDo />);
//     app
//       .find(".ToDoItem-Delete")
//       .first()
//       .simulate("click");
//     expect(app.find(".ToDoItem").length).toBe(1);
//     expect(
//       app
//         .find(".ToDoItem-Text")
//         .first()
//         .text()
//     ).toEqual("buy milk");
//   });
//   const item = { text: "Clean the pot" };
//   const toDoItem = mount(<ToDoItem item={item} />);

//   it("Renders the text from the prop", () => {
//     expect(toDoItem.find("p").text()).toEqual(item.text);
//   });

//   it("Renders a delete button", () => {
//     expect(toDoItem.find("button").text()).toEqual("-");
//   });
// });

//*****************Testing Library**********************

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("Deleting items", () => {
  it("When the delete button is pressed for the first todo item, it removes the entire item", () => {
    const { queryAllByTestId } = render(<ToDo />);
    const deleteButtons = queryAllByTestId("delete");
    expect(queryAllByTestId("todo-item").length).toBe(2);

    fireEvent.click(deleteButtons[0]);
    expect(queryAllByTestId("todo-item").length).toBe(1);
  });

  it("means that because the first toDoItem was deleted, the first toDoItem should now be buy milk", () => {
    const { queryAllByTestId, queryByTestId } = render(<ToDo />);
    const deleteButtons = queryAllByTestId("delete");

    fireEvent.click(deleteButtons[0]);
    const todoText = queryByTestId("todo-text");
    expect(todoText.textContent).toEqual("buy milk");
  });
  const item = { text: "Clean the pot" };

  it("Renders the text from the prop", () => {
    const { getByTestId } = render(<ToDoItem item={item} />);
    expect(getByTestId("todo-text").textContent).toBe(item.text);
  });

  it("Renders a delete button", () => {
    const { getByTestId } = render(<ToDoItem item={item} />);
    expect(getByTestId("delete").textContent).toBe("-");
  });
});
