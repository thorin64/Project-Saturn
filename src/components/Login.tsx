import "./css/Login.css";
import pg from "pg";

const { Pool, Client } = pg;

const pool = new Pool({
  host: "localhost",
  user: "psaturn",
  database: "project-saturn",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const client = await pool.connect();

client.on("error", (err) => {
  console.error("something bad has happened!", err.stack);
});

export default function Login() {
  function handleSubmit(formData) {
    const emailData = formData.get("email");
    const passwdData = formData.get("passwd");
    alert(`You searched for ${emailData} and ${passwdData}`);
  }
  //ONLY WORKS ON ROOT
  //MAKE A WAY TO PASS THIS DATA FROM CHILD TO PARENT

  // Using hooks you could write something like this.
  //
  // In App:
  //
  // import React, { useState } from 'react'
  //
  // export default function App() {
  //
  //   // `useState` returns an array with the state
  //   // and the method used to update the state
  //   // You can initialise the state with a variable/object
  //   const [name, setName] = useState('Tarun');
  //
  //   // No need for a render method
  //   // Just return the JSX from the function
  //   return <Name name={name} />;
  // }
  // In Name:
  //
  // import React from 'react'
  //
  // // Props are passed down like normal function args
  // // Destructure `names` from the props object
  // export default function Name({ name }) {
  //   return <div>My name is: {name}</div>;
  // }

  return (
    <>
      {" "}
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form id="loginForm" action={handleSubmit}>
          <label>
            <span id="usernameInfo" className="loginInfo">
              <input name="email" type="text" placeholder="e-mail" />
            </span>
          </label>
          <label>
            <span id="passwordInfo" className="loginInfo">
              <input name="passwd" type="password" placeholder="password" />
            </span>
          </label>
          <div>
            <button type="submit">fuck</button>
          </div>
        </form>
      </div>
    </>
  );
}
