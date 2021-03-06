import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { initialDataLoad } from "./actions/actions";
import CircularIndeterminate from "./CircularIndeterminate";
import { EachResult } from "./EachResult";

export function FilteredResults() {
  const dispatch = useDispatch();
  const searchResult = useSelector(
    (state) => state.SearchDataReducer.searchResult
  );
  useEffect(() => {
    dispatch(initialDataLoad());
  }, [dispatch]);
  if (searchResult === null) {
    return <CircularIndeterminate />;
  }
  return (
    <Row className="FilteredResults">
      <Col className="px-5">
        <h3 className="result mb-5 mt-3 mt-md-0">Results</h3>
        {searchResult.map((item, itemIndex) => (
          <EachResult index={itemIndex} name={item.name} />
        ))}
      </Col>
    </Row>
  );
}
