import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

// Named export for the POST method
export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body
    const { name, course, certificateId } = body;

    if (!name || !course || !certificateId) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Create a database connection
    const connection = await mysql.createConnection(dbConfig);

    // Check if the certificate ID already exists
    const checkQuery = `
      SELECT * FROM certificates WHERE certificate_id = ?;
    `;
    const [rows] = await connection.execute(checkQuery, [certificateId]);

    if (rows.length > 0) {
      await connection.end();
      return new Response(
        JSON.stringify({ error: "Certificate with the same ID already exists." }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert the new certificate
    const insertQuery = `
      INSERT INTO certificates (name, course, certificate_id, created_at)
      VALUES (?, ?, ?, NOW());
    `;
    await connection.execute(insertQuery, [name, course, certificateId]);

    await connection.end();

    return new Response(
      JSON.stringify({ message: "Certificate saved successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error saving certificate:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
