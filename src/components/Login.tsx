import "../css/App.css";
import { dbInsertQuery } from "../db/DBConnect.js";
export default function Login() {
  return (
    <>
      {" "}
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form id="loginForm" action={dbInsertQuery}>
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
