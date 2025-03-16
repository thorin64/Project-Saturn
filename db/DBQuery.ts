import { format } from "@scaleleap/pg-format";
import { client } from "./DBConnect.ts";

export default async function dbInsertQuery(email: string, passwd: string) {
  const dynamic_query = format(
    "INSERT INTO users (email, password) VALUES ('%s', crypt('%s', gen_salt('bf')));",
    email,
    passwd,
  );
  const query = await client.query(dynamic_query);
  console.log(query.rows[0]);
}
