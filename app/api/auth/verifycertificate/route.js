import mysql from 'mysql2/promise';

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
};

export async function POST(req) {
    try {
        const body = await req.json();
        const { certificateId } = body;

        if (!certificateId) {
            console.log('Missing Certificate ID');
            return new Response(
                JSON.stringify({ message: 'Certificate ID is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const connection = await mysql.createConnection(dbConfig);

        const [rows] = await connection.execute(
            'SELECT name, course FROM certificates WHERE certificate_id = ?',
            [certificateId]
        );

        await connection.end();

        if (rows.length === 0) {
            console.log('Certificate Not Found');
            return new Response(
                JSON.stringify({ message: 'Certificate not found' }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
        }
        const { name, course } = rows[0];
        return new Response(
            JSON.stringify({ name, course }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Database Error:', error);
        return new Response(
            JSON.stringify({ message: 'Something went wrong' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
