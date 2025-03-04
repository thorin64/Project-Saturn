import "./css/App.css";

// Works also with SSR as expected
// const Card = lazy(() => import("./Card"));

function App() {
  return (
    <>
      <button className="refresh-mainTable">󱘴</button>
      <div className="crudbox">
        <div>insert data here</div>
      </div>
    </>
  );
}

export default App;
