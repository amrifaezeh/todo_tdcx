import { useContext, useEffect, useState } from "react";
import { Button, Container, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import { GlobalContext } from "../../../State/store";
import PopUp from "../../bare/popup";
import AddTask from "../add-task";
import SearchIcon from "./search-solid.svg";
import TaskItem from "./task-item";
import "./task-table.css";

const styles = {
  button: {
    width: 124,
    background: "#5285EC 0% 0% no-repeat padding-box",
  },
};

export default function TaskTable() {
  const [store, dispatch] = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [taskItems, setTableRows] = useState(store.tasks);

  const [showAddTask, setShowAddTask] = useState(false);

  const toggleShowTask = () => setShowAddTask((x) => !x);

  useEffect(() => {
    setTableRows(store.tasks.filter((x) => x.name.includes(search)));
    console.log("filtered", taskItems, search);
  }, [search, store.tasks]);

  return (
    <>
      <PopUp show={showAddTask} onHide={toggleShowTask}>
        <AddTask></AddTask>
      </PopUp>
      <Container className="mt-4">
        <div className="d-flex flex-wrap mb-3">
          <h5 className="w-xs-100 text-center ">Tasks</h5>
          <div className="flex-grow-1"></div>
          <div className="w-xs-100">
            <InputGroup className="mb-2 input">
              <InputGroup.Text style={{ backgroundColor: "#D9DFEB", borderColor: "#D9DFEB" }}>
                <img src={SearchIcon} />
              </InputGroup.Text>
              <FormControl
                id="inlineFormInputGroup"
                className="input"
                placeholder="Search by task name"
                style={{ backgroundColor: "#D9DFEB", borderColor: "#D9DFEB" }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </div>
          <div className="w-xs-100 ml-sm-1">
            <Button variant="primary" type="submit" style={styles.button} className="round-8 w-100" onClick={toggleShowTask}>
              + New Task
            </Button>
          </div>
        </div>

        <ListGroup as="ol" numbered>
          {taskItems.map((t) => {
            return (
              <ListGroup.Item key={t._id} className="p-4">
                <TaskItem completed={t.completed} name={t.name} id={t._id} />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    </>
  );
}
