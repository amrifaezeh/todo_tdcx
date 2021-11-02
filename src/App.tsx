import { useContext } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import { GlobalContext } from "./State/store";

function App() {
  const [store] = useContext(GlobalContext);

  return <>{store.auth.isAuth ? <Dashboard /> : <Login />}</>;
}

export default App;
