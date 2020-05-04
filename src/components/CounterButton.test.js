import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

it("expect to render Counter Componet", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("correctly increment counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find(`[id="counter"]`).simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
});

it("correctly passed prop of red", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find(`[id="counter"]`).simulate("click");
  expect(wrapper.props().color).toEqual("red");
});
