import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    const url = 'http://localhost:3000/register';
    const payload = JSON.stringify({
        student_id: 3,
        course_id: 103
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const res = http.post(url, payload, params);
    console.log(`Response status: ${res.status}`);
    sleep(1);
}
