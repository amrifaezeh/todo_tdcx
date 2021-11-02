import AddTask from "../tasks/add-task";

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
    width: 262,
    background: "#5285EC 0% 0% no-repeat padding-box",
  },
};

export default function EmptyDashboard() {
  return (
    <main className="vh-100 d-flex justify-content-center align-items-center" style={styles.main}>
      <AddTask />
    </main>
  );
}
