import React from "react";
import { Col, Row } from "react-bootstrap";
import { FilteredResults } from "./FilteredResults";
import { SideBar } from "./SideBar";

export function MainArea() {
  return (
    <Row className="pb-5">
      <Col lg={4} md={5}>
        <SideBar />
      </Col>
      <Col lg={8} md={7}>
        <FilteredResults />
      </Col>
    </Row>
  );
}
