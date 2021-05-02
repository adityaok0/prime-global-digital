import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { initialDataLoad } from "./actions/actions";
import CircularIndeterminate from "./CircularIndeterminate";

export function FilteredResults() {
  const dispatch = useDispatch();
  const searchResult = useSelector(
    (state) => state.SearchDataReducer.searchResult
  );
  useEffect(() => {
    dispatch(initialDataLoad());
  }, []);
  if (searchResult === null) {
    return <CircularIndeterminate />;
  }
  return (
    <Row className="FilteredResults">
      <Col className="px-5">
        <h3 className="result mb-5 mt-3 mt-md-0">Results</h3>
        {searchResult.map((item, itemIndex) => (
          <div key={`result${itemIndex}`}>
            <h4 className="planet-name">{item.name}</h4>
            <p></p>
          </div>
        ))}
      </Col>
    </Row>
  );
}
