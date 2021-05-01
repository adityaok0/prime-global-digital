import { Checkbox, FormControlLabel, withStyles } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";

export function SideBar() {
  const GreenCheckbox = withStyles({
    root: {
      color: "#6269a8",
      "&$checked": {
        color: "#6269a8",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  return (
    <Row className="SideBar">
      <Col className="px-5">
        <div className="color-filter">
          <h6 className="filterHeading">Color</h6>
          <FormControlLabel
            control={
              <GreenCheckbox
                // checked={state.checkedG}
                // onChange={handleChange}
                name="checkedG"
              />
            }
            label="Custom color"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                // checked={state.checkedG}
                // onChange={handleChange}
                name="checkedG"
              />
            }
            label="Custom color"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                // checked={state.checkedG}
                // onChange={handleChange}
                name="checkedG"
              />
            }
            label="Custom color"
          />
        </div>
        <div className="shape-filter mt-3">
          <h6 className="filterHeading">Shape</h6>
          <FormControlLabel
            control={
              <GreenCheckbox
                // checked={state.checkedG}
                // onChange={handleChange}
                name="checkedG"
              />
            }
            label="Custom color"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                // checked={state.checkedG}
                // onChange={handleChange}
                name="checkedG"
              />
            }
            label="Custom color"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                // checked={state.checkedG}
                // onChange={handleChange}
                name="checkedG"
              />
            }
            label="Custom color"
          />
        </div>
        <div className="size-filter mt-3">
          <h6 className="filterHeading">Size</h6>
          <FormControlLabel
            control={
              <GreenCheckbox
                // checked={state.checkedG}
                // onChange={handleChange}
                name="checkedG"
              />
            }
            label="Custom color"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                // checked={state.checkedG}
                // onChange={handleChange}
                name="checkedG"
              />
            }
            label="Custom color"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                // checked={state.checkedG}
                // onChange={handleChange}
                name="checkedG"
              />
            }
            label="Custom color"
          />
        </div>
      </Col>
    </Row>
  );
}
