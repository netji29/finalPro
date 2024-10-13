import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'course_registration',
});

export const registerStudent = async (student_id: number, course_id: number) => {
    const [result] = await pool.execute(
        'INSERT INTO registrations (student_id, course_id) VALUES (?, ?)',
        [student_id, course_id]
    );
    return result;
};
