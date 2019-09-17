import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../Utils";
import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some text 1"
        },
        {
          title: "Example title 2",
          body: "Some text 1"
        },
        {
          title: "Example title 3",
          body: "Some text 1"
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  it("exampleMethod_updatesState Method should update state as expected", () => {
    const classInstance = wrapper.instance(); // create an instance of the class from the shallow copy.
    classInstance.exampleMethod_updatesState(); // fire the method.
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it("exampleMethod_returnsAValue Method should return value as expected", () => {
    const classInstance = wrapper.instance();
    const oldValue = 2;
    const newValue = classInstance.exampleMethod_returnsAValue(oldValue);
    expect(newValue).toBe(oldValue + 1);
  });
});
