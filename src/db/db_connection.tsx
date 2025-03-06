import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  user: "psaturn",
  database: "project-saturn",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export default pool;
