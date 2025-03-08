import Login from "./components/Login";
import "./css/App.css";
// Works also with SSR as expected
// const Card = lazy(() => import("./Card"));

const App = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default App;
