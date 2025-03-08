import pg from "pg";

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

export async function dbDisconnect() {
  await client.end();
  console.log("client has disconnected");
}

dbConnect();
