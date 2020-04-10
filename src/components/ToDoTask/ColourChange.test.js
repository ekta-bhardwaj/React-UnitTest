import React from "react";
import { shallow } from "enzyme";
import ColourChange from "./ColourChange";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// it("button changes color of box", () => {
//   const app = shallow(<ColourChange />);
//   expect(app.find(".box").length).toEqual(1);
//   app
//     .find("button")
//     .last()
//     .simulate("click");
//   expect(app.find(".box.red").length).toEqual(1);
// });

// it("button click changes color of box", () => {
//   const app = shallow(<ColourChange />);
//   expect(app.find(".box").length).toEqual(1);

//   const button = app.find("button").last();
//   // pass mocked event object
//   button.simulate("click", {
//     target: {
//       getAttribute: function() {
//         return button.props()["data-color"];
//       }
//     }
//   });

//   expect(app.find(".box.red").length).toEqual(1);
// });

it("button click changes color of box", async () => {
  const app = shallow(<ColourChange />);
  expect(app.find(".box").length).toEqual(1);
  // cache button element
  const button = app.find("button").last();
  const eventMock = {
    target: {
      getAttribute: function() {
        return button.props()["data-color"];
      }
    }
  };
  // pass mocked event object
  await button.props().onClick(eventMock);
  expect(app.find(".box.red").length).toEqual(1);
});
