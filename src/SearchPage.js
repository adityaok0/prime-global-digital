import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchTextAction, cancelSearchAction } from "./actions/actions";
import { MainArea } from "./MainArea";
export function SearchPage() {
  const dispatch = useDispatch();
  const search = () => {
    dispatch(searchTextAction(searchText));
  };
  const cancelSearch = () => {
    dispatch(cancelSearchAction());
  };
  const [searchText, setSearchText] = useState("");
  return (
    <Container className="SearchPage">
      <Row className="justify-content-center pt-3 pb-5">
        <Col lg={6}>
          <SearchBar
            value={searchText}
            onChange={(newValue) => setSearchText(newValue)}
            onRequestSearch={search}
            onCancelSearch={async () => {
              await setSearchText("");
              cancelSearch();
            }}
            placeholder="Search"
            autoFocus
          />
        </Col>
      </Row>
      <MainArea />
    </Container>
  );
}
