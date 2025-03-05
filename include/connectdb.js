import pg from "pg";
const { Client } = pg;
const client = new Client();

client.connect((err) => {
  client.query("SELECT $1::text as message", ["Hello world!"], (err, res) => {
    console.log(err ? err.stack : res.rows[0].message); // Hello World!
    client.end();
  });
});
