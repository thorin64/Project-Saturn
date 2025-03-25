import postgres from "postgres";

const { Client } = postgres;

export const client = new Client({
  host: process.env.PGHOST,
  user: "psaturn",
  database: "project-saturn",
  // port: process.env.PGPORT,
});

let client_connected = 0;

export async function dbConnect() {
  try {
    await client.connect();

    const result = await client.query("SELECT version();");
    console.log(result.rows[0]);

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
