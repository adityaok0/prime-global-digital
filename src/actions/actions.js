import axios from "axios";
import qs from "qs";

let url = "https://my-json-server.typicode.com/adityaok0/mock-json-server/";
export function getFilterDetails() {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      Promise.all([
        axios.get(url + "planets"),
        axios.get(url + "shapes"),
        axios.get(url + "colors"),
        axios.get(url + "sizes"),
      ]).then((res) => {
        resolve(res);
        return dispatch({
          type: "SET_FILTER_DATA",
          payload: {
            res,
          },
        });
      });
    });
  };
}
export function setFilters(type, index) {
  return function (dispatch, getState) {
    let searchQuery = getState().SearchDataReducer.searchQuery;
    let param = searchQuery[type].filter(
      (x) => x === getState().SearchDataReducer.filterData[type][index].id
    );
    if (param.length === 0) {
      searchQuery[type].push(
        getState().SearchDataReducer.filterData[type][index].id
      );
    } else {
      searchQuery[type] = searchQuery[type].filter(
        (x) => x !== getState().SearchDataReducer.filterData[type][index].id
      );
    }
    dispatch({
      type: "SET_PARAMS",
      payload: {
        searchQuery: searchQuery,
      },
    });
    getFilteredData(getState().SearchDataReducer.searchQuery, dispatch);
  };
}
export function searchTextAction(text) {
  return function (dispatch, getState) {
    let searchQuery = getState().SearchDataReducer.searchQuery;
    searchQuery.q = text;
    dispatch({
      type: "SET_PARAMS",
      payload: {
        searchQuery: searchQuery,
      },
    });
    axios
      .get(url + "planets", {
        params: getState().SearchDataReducer.searchQuery,
        paramsSerializer: (params) => {
          return qs.stringify(params, { indices: false });
        },
      })
      .then((res) => {
        dispatch({
          type: "SET_FILTERED_RESULTS",
          payload: {
            data: res.data,
          },
        });
      });
  };
}

export function cancelSearchAction() {
  return function (dispatch, getState) {
    let searchQuery = getState().SearchDataReducer.searchQuery;
    delete searchQuery.q;
    dispatch({
      type: "SET_PARAMS",
      payload: {
        searchQuery: searchQuery,
      },
    });
    getFilteredData(getState().SearchDataReducer.searchQuery, dispatch);
  };
}
export function initialDataLoad() {
  return function (dispatch, getState) {
    getFilteredData(getState().SearchDataReducer.searchQuery, dispatch);
  };
}
const getFilteredData = (searchQuery, dispatch) => {
  new Promise((resolve, reject) => {
    axios
      .get(url + "planets", {
        params: searchQuery,
        paramsSerializer: (params) => {
          return qs.stringify(params, { indices: false });
        },
      })
      .then((res) => {
        dispatch({
          type: "SET_FILTERED_RESULTS",
          payload: {
            data: res.data,
          },
        });
      });
  });
};
