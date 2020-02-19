import { CHANGE_SEARCH_FIELD } from "./constaints";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});
