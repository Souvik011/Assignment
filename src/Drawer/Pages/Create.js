import React, { Fragment, useEffect, useRef, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Create.css";
import { useDispatch } from "react-redux";
import { getItemArr, addItemArr } from "../../store/ActionThunk";
import { NavLink } from "react-router-dom";

const Create = (props) => {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState(
    JSON.parse(localStorage.getItem("new"))
  );
  const textRef = useRef();
  const stateRef = useRef();
  const dateRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const Obj = {
      text: textRef.current.value,
      state: stateRef.current.value,
      date: dateRef.current.value,
    };

    localStorage.setItem("new", JSON.stringify(Obj));
    setNewItem(Obj);
    dispatch(addItemArr(Obj));
  };
  useEffect(() => {
    getItemArr();
  }, [dispatch]);

  return (
    <Fragment>
      <Form onSubmit={submitHandler} className="form-outer">
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4} htmlFor="text">
            Task Details :{" "}
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              id="text"
              placeholder="Task Details"
              ref={textRef}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            State :{" "}
          </Form.Label>
          <Col sm={8}>
            <Form.Select
              aria-label="Default select example"
              ref={stateRef}
              className="dropdown"
            >
              <option>Select one of the Following State from Drop Down</option>
              <option value="Started">Started</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4} htmlFor="date">
            Date :{" "}
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="date" id="date" ref={dateRef} />
          </Col>
        </Form.Group>
        <Button type="submit" className="btn">
          Create
        </Button>
      </Form>
      {newItem && (
        <div
          style={{
            display: "inline",
            textAlign: "center",
            margin: "8vh 0 4vh",
            color: "brown",
            backgroundColor: "bisque",
          }}
        >
          <h6>
            Text : {newItem.text} , State : {newItem.state} , Date :{" "}
            {newItem.date}
          </h6>
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <h3>
          To (view/edit or delete) the added Items{" "}
          <NavLink to="/items">click here</NavLink>
        </h3>
      </div>
    </Fragment>
  );
};

export default Create;
