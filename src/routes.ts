import { Router } from 'express';
import { registerStudent } from './controllers/registrationController';

const router = Router();

// เส้นทางสำหรับ root
router.get('/', (req, res) => {
    res.send('Welcome to the Course Registration API');
});

// เส้นทางสำหรับการลงทะเบียนเรียน
router.post('/register', registerStudent); // นี่คือการกำหนดเส้นทางสำหรับ POST

export default router;
