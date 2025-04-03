import pg from "pg";
import { Sequelize } from "sequelize";

const { Client } = pg;

const sequelize = new Sequelize(
  "postgres://psaturn:tidalTempest64@localhost:5432/project-saturn",
  { logging: console.log },
);

const client = new Client({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
});

//testing sequelize connection
export async function sqlzTest() {
  try {
    await sequelize.authenticate();
    console.log("Sequelize connection has been established successfully.");
  } catch (error) {
    console.error("Sequelize unable to connect to the database:", error);
  }
}

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

// dbConnect();
