import express from 'express';
import routes from './routes'; // นำเข้า routes

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(routes); // ใช้ routes

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
