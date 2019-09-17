import React from "react";
import { findByTestAttr, checkProps } from "../../../Utils";
import SharedButton from "./index";
import { shallow } from "enzyme";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn(); // mock function
      const props = {
        buttonText: "Example Button Text",
        emitEvent: mockFunc
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("Should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    // simulate the click event and make an assertion.
    it("Should emit callback on click event", () => {
      // locate the button.
      const button = findByTestAttr(wrapper, "buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
