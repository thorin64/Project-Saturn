import pg from "pg";
import { emailData, passwdData } from "../components/Login";

const { Client } = pg;

const client = new Client({
  host: "localhost",
  user: "psaturn",
  database: "project-saturn",
});

let client_connected = 0;

export async function dbConnect() {
  try {
    await client.connect();

    // const result = await client.query("SELECT version();");
    // console.log(result);

    console.log("connection sucessful");
    client_connected = 1;
  } catch (err) {
    console.error(err);
  } finally {
    // client.release;
    client.on("error", (err) => {
      console.error("something bad has happened!", err.stack);
    });
  }

  if (client_connected === 1) {
    console.log("all good");
  } else {
    console.log("oops");
  }
}
dbConnect();

export async function dbDisconnect() {
  await client.end();
  console.log("client has disconnected");
}

export async function dbInsertQuery(email, passwd) {
  email = emailData;
  passwd = passwdData;

  const query = await client.query(
    `INSERT INTO users (email, password) VALUES ('$(email)', crypt('$(passwd)', gen_salt('bf')));`,
  );
  console.log(query);
}
