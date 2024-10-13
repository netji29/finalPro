import { Request, Response } from 'express';
import { cacheRegistration } from '../services/redisService';
import { sendToQueue } from '../services/rabbitMQService';

export const registerStudent = async (req: Request, res: Response) => {
    const { student_id, course_id } = req.body;

    try {
        // Cache registration in Redis
        await cacheRegistration(student_id, course_id);
        
        // Send message to RabbitMQ
        await sendToQueue(student_id, course_id);

        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error during registration:', error); // เพิ่มการดีบักที่นี่
        res.status(500).json({ message: 'Registration failed', error });
    }
};
