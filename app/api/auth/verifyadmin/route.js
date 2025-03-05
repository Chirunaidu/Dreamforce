import bcrypt from "bcrypt";
import { createConnection } from "mysql2/promise";

const db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const connection = await createConnection(db);
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 }); //can also change to user does not exists
    }

    const admin = rows[0];
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    return new Response(JSON.stringify({ message: "Login successful" }), { status: 200 });
  } 
  catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
