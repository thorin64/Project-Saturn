import "../css/App.css";
export default function Login() {
  function handleSubmit(formData: any) {
    const emailData = formData.get("email");
    const passwdData = formData.get("passwd");
    console.log(`You searched for ${emailData}`);
  }
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
