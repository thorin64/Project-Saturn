import pool from "./db_connection";

const client = await pool.connect();
const CreateQueryPG = () => {
  console.log("result");
  try {
    const result = client.query("SELECT * FROM USERS;");
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    client.release;
    client.on("error", (err: any) => {
      console.error("something bad has happened!", err.stack);
    });
  }
};
export default CreateQueryPG;
