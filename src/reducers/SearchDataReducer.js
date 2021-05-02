const qs = require("qs");
let data = qs.parse(sessionStorage.getItem("searchQuery"));
["color", "size", "shape", "q"].forEach((item) => {
  if (!(item in data)) {
    data[item] = [];
  }
});
let defaultState = {
  filterData: null,
  searchResult: [],
  searchQuery:
    sessionStorage.getItem("searchQuery") === null
      ? {
          color: [],
          shape: [],
          size: [],
          q: "",
        }
      : data,
};
const SearchDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_FILTER_DATA": {
      let temp = { ...state };
      temp.filterData = {
        planets: action.payload.res[0].data,
        shape: action.payload.res[1].data,
        color: action.payload.res[2].data,
        size: action.payload.res[3].data,
      };
      return temp;
    }
    case "SET_PARAMS": {
      let temp = { ...state };
      sessionStorage.setItem(
        "searchQuery",
        qs.stringify(action.payload.searchQuery)
      );
      temp.searchQuery = action.payload.searchQuery;
      return temp;
    }
    case "SET_FILTERED_RESULTS": {
      let temp = { ...state };
      temp.searchResult = action.payload.data;
      return temp;
    }
    default:
      return state;
  }
};
export default SearchDataReducer;
