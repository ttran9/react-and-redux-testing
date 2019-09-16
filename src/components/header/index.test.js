import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "./../../../Utils";

const setUp = (props = {}) => {
  // create a setup function to eliminate the repetitive shallow rendering.
  // copy the props over to the Header component.
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  // run before each test.
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1); // only one element that is of the 'headerComponent' class.
  });

  it("Should render a logo", () => {
    const logo = findByTestAttr(component, "logoIMG");
    expect(logo.length).toBe(1); // only one element that is of the 'logoIMG' class.
  });
});
