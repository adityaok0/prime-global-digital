import axios from "axios";
import qs from "qs";

let url = "http://localhost:3000/";
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
      console.log(searchQuery);
      // });
    } else {
      searchQuery[type] = searchQuery[type].filter(
        (x) => x !== getState().SearchDataReducer.filterData[type][index].id
      );
      console.log(searchQuery);
    }
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
export function initialDataLoad() {
  return function (dispatch, getState) {
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
