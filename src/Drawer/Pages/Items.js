import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./Items.css";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemArr,
  editItemArr,
  getItemArr,
} from "../../store/ActionThunk";
import { NavLink } from "react-router-dom";

const Items = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemArr());
  }, [dispatch]);
  const Items = useSelector((state) => state.action.items);
  console.log(Items);
  const [edit, setEdit] = useState(null);

  const deleteHandler = (Item) => {
    dispatch(deleteItemArr(Item.id));
  };
  const editHandler = (Item) => {
    setEdit(Item);
  };
  const saveEditHandler = (Item) => {
    setEdit(null);
    dispatch(editItemArr(Item));
  };

  const show = (
    <ul
      style={{
        maxHeight: "50vh",
        maxWidth: "50vw",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      {Items.map((item) => (
        <li
          key={item.id}
          style={{
            backgroundColor: "blueviolet",
            borderBottom: "1px solid black",
            marginBottom: "1rem",
            height: "10vh",
            width: "50vw",
          }}
        >
          <div
            style={{ display: "inline-flex", justifyContent: "space-around" }}
          >
            <p style={{ marginRight: "2vw" }}>{item.text}</p>
            <p style={{ marginRight: "2vw" }}>{item.state}</p>
            <p style={{ marginRight: "2vw" }}>$ {item.date}</p>
            <Button
              variant="danger"
              style={{
                margin: "1vh 1.5vw 4vh 1.5vw",
                fontSize: "1.5vh",
                height: "3vh",
                width: "6vw",
              }}
              onClick={() => deleteHandler(item)}
            >
              Delete
            </Button>
            <Button
              variant="info"
              style={{
                margin: "1vh 1.5vw 4vh 1.5vw",
                fontSize: "1.5vh",
                height: "3vh",
                width: "6vw",
              }}
              onClick={() => editHandler(item)}
            >
              Edit
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <Fragment>
      {!edit && (
        <Card
          style={{
            height: "40vh",
            width: "52vw",
            margin: "5vh auto 10vh auto",
          }}
        >
          {show}
        </Card>
      )}
      {edit && (
        <div className="editExpense">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const updatedItem = {
                ...edit,
                text: e.target.text.value,
                state: e.target.state.value,
                date: e.target.date.value,
              };
              saveEditHandler(updatedItem);
            }}
          >
            <label>
              Text
              <input type="text" name="text" defaultValue={edit.text} />
            </label>
            <label>
              State :
              <select name="state" defaultValue={edit.state}>
                <option value="Started">Started</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </label>
            <label>
              Date:
              <input type="date" name="date" defaultValue={edit.date} />
            </label>
            <Button
              type="submit"
              variant="outline-success"
              style={{ marginRight: "1.5rem" }}
            >
              Save
            </Button>
            <Button variant="outline-danger" onClick={() => setEdit(null)}>
              Cancel
            </Button>
          </Form>
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <h6>
          To Add a item <NavLink to="/">click here</NavLink>
        </h6>
      </div>
    </Fragment>
  );
};
export default Items;
