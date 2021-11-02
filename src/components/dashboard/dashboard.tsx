import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { REPLACE_TASK } from "../../State/sate";
import { GlobalContext } from "../../State/store";
import { AUTH_HEADER, DASHBOARD_URL, TASKS_URL } from "../../State/urls";
import Counter from "../bare/counter";
import PopUp from "../bare/popup";
import TitledCard from "../bare/titled-card";
import NavBar from "../navbar/navbar";
import LatestTasks from "../tasks/latest-tasks";
import TaskChart from "../tasks/task-chart";
import TaskTable from "../tasks/task-table/task-table";
import EmptyDashboard from "./empty-dashbaord";

function DashboardWithData({ dashboardData }) {
  return (
    <div style={{ background: "#F4F4F6 0% 0% no-repeat padding-box" }} className="vh-100 pt-4">
      <Container>
        <Row className="w-100 ">
          <Col sm xs={12} className="pt-xs-1">
            <TitledCard
              title={"Tasks Completed"}
              style={{ height: 158 }}
              child={<Counter value={dashboardData.done} from={dashboardData.all} />}
            />
          </Col>
          <Col sm className="pt-xs-1 mt-2 mt-sm-0">
            <TitledCard title={"Latest Created Tasks"} style={{ height: 158 }} child={<LatestTasks values={dashboardData.latest} />} />
          </Col>
          <Col sm xs={{ order: "last" }} className="mt-2 mt-sm-0">
            <TitledCard
              title={""}
              style={{ height: 158 }}
              child={<TaskChart done={dashboardData.done} all={dashboardData.all} />}
              contentClass={"d-flex justify-content-center align-items-center h-100 w-100"}
            />
          </Col>
        </Row>

        <TaskTable></TaskTable>
      </Container>
    </div>
  );
}

export default function Dashboard() {
  const [store, dispatch] = useContext(GlobalContext);
  const [showAddTaskDialog, setShowTaskDialog] = useState(false);
  const [dashboardData, setDashboardData] = useState({ done: 0, all: 0 });

  useEffect(async () => {
    if (store.auth.isAuth) {
      try {
        // const request = await axios.get(DASHBOARD_URL, { headers: { Authorization: store.auth.token } });

        const request = await axios.get(TASKS_URL, AUTH_HEADER(store.auth.token));
        console.log("request2", request);
        dispatch({ type: REPLACE_TASK, data: request.data.tasks });
        // const doneCount = request.data.tasks.filter((x) => x.completed).length;
        // console.log(doneCount);

        // const allCount = request.data.tasks.length;
        // const latest = request.data.tasks.sort((a, b) => a.createdAt > b.createdAt);
        // console.log(latest);

        // setDashboardData({ done: doneCount, all: allCount, latest });
      } catch (error) {}
    }
  }, [store.auth]);

  useEffect(async () => {
    try {
      // const request = await axios.get(DASHBOARD_URL, { headers: { Authorization: store.auth.token } });

      // const request = await axios.get(TASKS_URL, AUTH_HEADER(store.auth.token));
      // console.log("request2", request);
      // dispatch({ type: REPLACE_TASK, data: request.data.tasks });
      // const doneCount = request.data.tasks.filter((x) => x.completed).length;
      // console.log(doneCount);

      // const allCount = request.data.tasks.length;
      // const latest = request.data.tasks.sort((a, b) => a.createdAt > b.createdAt);
      // console.log(latest);

      // setDashboardData({ done: doneCount, all: allCount, latest });
      const request = await axios.get(DASHBOARD_URL, AUTH_HEADER(store.auth.token));
      console.log("dashboard", request);
      setDashboardData({ done: request.data.tasksCompleted, all: request.data.totalTasks, latest: request.data.latestTasks });
    } catch (error) {}
  }, [store.tasks]);

  return (
    <main>
      <NavBar />
      <PopUp show={showAddTaskDialog} onHide={() => setShowTaskDialog(false)} />
      {dashboardData.all > 0 ? <DashboardWithData dashboardData={dashboardData} /> : <EmptyDashboard />}
    </main>
  );
}
