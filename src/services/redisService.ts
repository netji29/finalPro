import redis from 'redis';

const client = redis.createClient({
    host: 'localhost', // หรือที่อยู่ของ Redis server
    port: 6380        // ค่า default port ของ Redis
});

client.on('error', (err) => {
    console.error('Redis Client Error', err);
});

export const cacheRegistration = (student_id: number, course_id: number) => {
    return new Promise((resolve, reject) => {
        const key = `registration_${student_id}_${course_id}`;
        client.set(key, 'registered', (err) => {
            if (err) return reject(err);
            resolve(true);
        });
    });
};
