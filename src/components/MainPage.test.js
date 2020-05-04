import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("Expect to render Mainpage Componet", () => {
  expect(wrapper).toMatchSnapshot();
});

it("Returns the matching robots from matched search field", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "Andrea",
        email: "a@a.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };
  const filteredRobots = mockProps2.robots;
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual(filteredRobots);
});

it("Returns no matching robots from unmatched search field", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "Andrea",
        email: "a@a.com",
      },
    ],
    searchField: "z",
    isPending: false,
  };
  const filteredRobots = [];
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual(filteredRobots);
});
