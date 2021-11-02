import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { DELETE_TASK, UPDATE_TASK } from "../../../State/sate";
import { GlobalContext } from "../../../State/store";
import { AUTH_HEADER, TASKS_ID_URL } from "../../../State/urls";
import PenIcon from "./pen-solid.svg";
import "./task-item.css";
import TrashIcon from "./trash-solid.svg";

export default function TaskItem({ id, completed, name }) {
  const [store, dispatch] = useContext(GlobalContext);

  const [isCompleted, setIsCompleted] = useState(completed);

  const deleteTask = async () => {
    try {
      const request = await axios.delete(TASKS_ID_URL(id), AUTH_HEADER(store.auth.token));
      console.log("delete", request.data);
      dispatch({ type: DELETE_TASK, data: { _id: id } });
    } catch (error) {}
  };

  useEffect(async () => {
    try {
      const request = await axios.put(TASKS_ID_URL(id), { name, completed: isCompleted }, AUTH_HEADER(store.auth.token));

      dispatch({ type: UPDATE_TASK, data: { _id: id, completed: isCompleted, name } });
    } catch (error) {
      console.log(error);
    }
  }, [isCompleted]);

  return (
    <div className="d-flex justify-content-space-between align-items-baseline">
      <Form.Check type="checkbox" id={`checkbox-${id}`} className="d-flex justify-content-space-between align-items-baseline">
        <Form.Check.Input type="checkbox" onChange={() => setIsCompleted((x) => !x)} checked={isCompleted} />
        <Form.Check.Label style={{ marginLeft: 10 }}>
          <h3 className={isCompleted ? "completed" : "default"}>{name}</h3>
        </Form.Check.Label>
      </Form.Check>

      <div className="flex-grow-1"></div>
      <Button variant="light" className="mr-4">
        <img src={PenIcon} alt="" />
      </Button>
      <Button variant="light" style={{ marginLeft: 10 }} onClick={deleteTask}>
        <img src={TrashIcon} alt="" />
      </Button>
    </div>
  );
}
