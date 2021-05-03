import { Checkbox, FormControlLabel, withStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getFilterDetails, setFilters } from "./actions/actions";
import CircularIndeterminate from "./CircularIndeterminate";

export function SideBar() {
  const filterData = useSelector((state) => state.SearchDataReducer.filterData);
  const searchQuery = useSelector(
    (state) => state.SearchDataReducer.searchQuery
  );
  const dispatch = useDispatch();
  const [checks, setChecks] = useState(null);
  useEffect(() => {
    let checksTemp = { shape: [], color: [], size: [] };
    dispatch(getFilterDetails()).then((res) => {
      res[1].data.forEach((shape) => {
        checksTemp.shape.push({
          checked: searchQuery.shape.includes(shape.id) ? true : false,
        });
      });
      res[2].data.forEach((color) => {
        checksTemp.color.push({
          checked: searchQuery.color.includes(color.id) ? true : false,
        });
      });
      res[3].data.forEach((size) => {
        checksTemp.size.push({
          checked: searchQuery.size.includes(size.id) ? true : false,
        });
      });

      setChecks(checksTemp);
    });
    // }
  }, [dispatch, searchQuery.shape, searchQuery.color, searchQuery.size]);
  const handleChange = (type, index) => {
    let temp = { ...checks };
    temp[type][index].checked = !temp[type][index].checked;

    setChecks(temp);
    dispatch(setFilters(type, index));
  };
  const GreenCheckbox = withStyles({
    root: {
      color: "#6269a8",
      "&$checked": {
        color: "#6269a8",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  if (filterData === null || checks === null) {
    return <CircularIndeterminate />;
  }

  return (
    <Row className="SideBar">
      <Col className="px-5">
        <div className="color-filter">
          <h6 className="filterHeading">Color</h6>
          {filterData.color.map((item, itemIndex) => (
            <FormControlLabel
              key={`color${itemIndex}`}
              control={
                <GreenCheckbox
                  checked={checks.color[itemIndex].checked}
                  onChange={() => handleChange("color", itemIndex)}
                  name={item.name}
                />
              }
              label={item.name}
            />
          ))}
        </div>
        <div className="shape-filter mt-3">
          <h6 className="filterHeading">Shape</h6>
          {filterData.shape.map((item, itemIndex) => (
            <FormControlLabel
              key={`shape${itemIndex}`}
              control={
                <GreenCheckbox
                  checked={checks.shape[itemIndex].checked}
                  onChange={() => handleChange("shape", itemIndex)}
                  name={item.name}
                />
              }
              label={item.name}
            />
          ))}
        </div>
        <div className="size-filter mt-3">
          <h6 className="filterHeading">Size</h6>
          {filterData.size.map((item, itemIndex) => (
            <FormControlLabel
              key={`size${itemIndex}`}
              control={
                <GreenCheckbox
                  checked={checks.size[itemIndex].checked}
                  onChange={() => handleChange("size", itemIndex)}
                  name={item.name}
                />
              }
              label={item.name}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
}
