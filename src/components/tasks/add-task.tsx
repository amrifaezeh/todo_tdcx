import axios from "axios";
import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ADD_TASK } from "../../State/sate";
import { GlobalContext } from "../../State/store";
import { TASKS_URL } from "../../State/urls";
import TitledCard from "../bare/titled-card";

const styles = {
  main: {
    background: "#F4F4F6 0% 0% no-repeat padding-box",
  },
  card: {
    boxShadow: "0px 3px 6px #00000029",
    width: 296,
  },
  title: {
    marginBottom: 24,
  },
  button: {
    width: "100%",
    background: "#5285EC 0% 0% no-repeat padding-box",
  },
};

export default function AddTask() {
  const [store, dispatch] = useContext(GlobalContext);

  const [taskName, setTaskName] = useState("");

  const onAddTask = async (e: MouseEvent) => {
    e.preventDefault();

    try {
      const request = await axios.post(TASKS_URL, { name: taskName }, { headers: { authorization: store.auth.token } });

      dispatch({ type: ADD_TASK, data: [request.data.task] });
      setTaskName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <TitledCard title={"+ New Task"}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={taskName}
              type="text"
              placeholder="Task Name"
              className="round-8 input"
              onChange={(e) => setTaskName(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={styles.button} className="round-8" onClick={onAddTask}>
            + New Task
          </Button>
        </Form>
      </TitledCard>
    </div>
  );
}
