import { Col, Row } from "react-bootstrap";

export function FilteredResults() {
  return (
    <Row className="FilteredResults">
      <Col className="px-5">
        <h3 className="result mb-5 mt-3 mt-md-0">Results</h3>
        <div>
          <h4 className="planet-name">Earth</h4>
          <p>Round,blue,medium</p>
        </div>
      </Col>
    </Row>
  );
}
