import "./css/App.css";
import Login from "./components/Login";
// import useToken from "./components/useToken";

// Works also with SSR as expected
// const Card = lazy(() => import("./Card"));

function App() {
  return <Login />;
}
/* return (
    <>
      <div className="crudbox">insert data</div>
    </>
  ); */

export default App;
