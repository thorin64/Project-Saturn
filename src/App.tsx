import "./css/App.css";
import Login from "./components/Login";
import AuthProvider from "./components/AuthProvider.js";
import CreateQueryPG from "./db/db_create";
import { useState } from "react";
// import Handler from "./components/Login";
// import useToken from "./components/useToken";

// Works also with SSR as expected
// const Card = lazy(() => import("./Card"));

/* return (
    <>
      <div className="crudbox">insert data</div>
    </>
  ); */

const App = () => {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
};

export default App;
