import * as types from "./constants";

import * as reducers from "./reducers";

const initialStateSearch = {
  searchField: "",
};
describe("searchRobots", () => {
  it("Should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it("Should handled CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: types.CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({
      searchField: "abc",
    });
  });
});

const initialStateRobots = {
  robots: [],
  isPending: true,
};
describe("requestRobots", () => {
  it("Should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("Should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_PENDING,
        payload: { isPending: true },
      })
    ).toEqual({
      robots: [],
      isPending: true,
    });
  });

  it("Should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: "123",
            name: "test",
            email: "test@test.com",
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: "123",
          name: "test",
          email: "test@test.com",
        },
      ],
      isPending: false,
    });
  });

  it("Should handle REQUEST_ROBOTS_FAILED action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_FAILED,
        payload: "NOOO",
      })
    ).toEqual({
      error: "NOOO",
      robots: [],
      isPending: true,
    });
  });
});
