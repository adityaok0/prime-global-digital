import { TextField } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { MainArea } from "./MainArea";
export function SearchPage() {
  return (
    <Container className="SearchPage">
      <Row className="justify-content-center pt-3 pb-5">
        <Col lg={6}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={["123", "234", "465", "1234", "5674", "23324"].map(
              (option) => option
            )}
            renderInput={(params) => (
              <TextField
                className="searchBox"
                {...params}
                label="Search input"
                margin="normal"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </Col>
      </Row>
      <MainArea />
    </Container>
  );
}
