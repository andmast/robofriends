import { shallow } from "enzyme";
import React from "react";
import CardList from "./Cardlist";

it("expect to render Card Componet", () => {
  const mockRobots = [
    {
      id: 1,
      name: "test",
      email: "test@test.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
