import amqp from 'amqplib';

const queue = 'registration_queue';

export const sendToQueue = async (student_id: number, course_id: number) => {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue(queue, { durable: true });

        const message = JSON.stringify({ student_id, course_id });
        channel.sendToQueue(queue, Buffer.from(message));

        console.log(`Message sent to queue: ${message}`);
        
        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('Error sending to RabbitMQ', error);
    }
};
