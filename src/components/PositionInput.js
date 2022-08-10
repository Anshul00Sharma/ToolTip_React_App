import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const PositionInput = ({ position, setPosition, handleSubmit }) => {
  return (
    <Form
      className="col-md-2 mx-auto"
      style={{ marginTop: "270px" }}
      onSubmit={handleSubmit}
    >
      <Stack gap={2}>
        <Form.Select
          aria-label="Default select example"
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="right">Right</option>
          <option value="left">Left</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </Form.Select>
        <div className="change-Button">
          <span>Change Position</span>
        </div>
      </Stack>
    </Form>
  );
};

export default PositionInput;
