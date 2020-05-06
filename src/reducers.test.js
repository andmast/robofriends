import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: "",
  };
  it("Should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it("Should handled CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: "",
  };
  it("Should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("Should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ error: "", isPending: true, robots: [] });
  });

  it("Should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: "123",
            name: "test",
            email: "test@test.com",
          },
        ],
      })
    ).toEqual({
      error: "",
      isPending: false,
      robots: [
        {
          id: "123",
          name: "test",
          email: "test@test.com",
        },
      ],
    });
  });

  it("Should handle REQUEST_ROBOTS_FAILED action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "Error",
      })
    ).toEqual({
      error: "Error",
      isPending: false,
      robots: [],
    });
  });
});
