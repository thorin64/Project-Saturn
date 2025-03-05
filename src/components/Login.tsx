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

// Handler for form data

function Handler() {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      console.log(formData);
    });
  });

  const formData = new FormData(form);
  const obj = Object.fromEntries(formData);
  console.log(obj);
}

export default function Login() {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form id="loginForm" onSubmit={Handler}>
        <label>
          <span id="usernameInfo" className="loginInfo">
            <input type="text" placeholder="e-mail" />
          </span>
        </label>
        <label>
          <span id="passwordInfo" className="loginInfo">
            <input type="password" placeholder="password" />
          </span>
        </label>
        <div>
          <button type="submit">Send info</button>
        </div>
      </form>
    </div>
  );
}
