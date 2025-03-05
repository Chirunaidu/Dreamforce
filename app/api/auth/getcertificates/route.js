import { getServerSession } from "next-auth/next";
import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

export async function GET(req) {
  try {
    const session = await getServerSession({ req });
    if (!session|| !session.user.email) {
      return NextResponse.json(
        { error: "BruteForce method detected" },
        { status: 403 }
      );
    }
    const connection = await mysql.createConnection(dbConfig);
    const query = `SELECT * FROM certificates ORDER BY created_at DESC;`;
    const [rows] = await connection.execute(query);
    await connection.end();

    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error("Error fetching certificates:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
