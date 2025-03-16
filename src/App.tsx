import "./css/App.css";
import Login from "./components/Login";
// Works also with SSR as expected
// const Card = lazy(() => import("./Card"));

const App = () => {
  return <Login />;
};

export default App;
